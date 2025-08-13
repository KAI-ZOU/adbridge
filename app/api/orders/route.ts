import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { creatorId, serviceType, amount, requirements, platform } = await request.json()
    const db = await getDatabase()

    // Get creator profile
    const creator = await db.collection("creatorProfiles").findOne({
      _id: { $oid: creatorId },
    })

    if (!creator) {
      return NextResponse.json({ error: "Creator not found" }, { status: 404 })
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      metadata: {
        creatorId,
        buyerId: session.user.email,
        serviceType,
        platform,
      },
    })

    // Create order in database
    const order = {
      creatorId,
      buyerId: session.user.email,
      serviceType,
      platform,
      amount,
      requirements: requirements || "",
      status: "pending",
      stripePaymentIntentId: paymentIntent.id,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("orders").insertOne(order)

    return NextResponse.json({
      orderId: result.insertedId,
      clientSecret: paymentIntent.client_secret,
      message: "Order created successfully",
    })
  } catch (error) {
    console.error("Create order error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") // "buyer" or "seller"

    const db = await getDatabase()

    const filter = type === "seller" ? { creatorId: session.user.email } : { buyerId: session.user.email }

    const orders = await db.collection("orders").find(filter).sort({ createdAt: -1 }).toArray()

    // Get creator/buyer details for each order
    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const creator = await db.collection("creatorProfiles").findOne({
          userId: order.creatorId,
        })
        const buyer = await db.collection("users").findOne({
          email: order.buyerId,
        })

        return {
          ...order,
          id: order._id.toString(),
          creator: creator
            ? {
                name: creator.creatorName,
                handle: creator.handle,
                image: "/placeholder-user.jpg",
              }
            : null,
          buyer: buyer
            ? {
                name: buyer.name,
                email: buyer.email,
                image: buyer.image || "/placeholder-user.jpg",
              }
            : null,
        }
      }),
    )

    return NextResponse.json({ orders: enrichedOrders })
  } catch (error) {
    console.error("Get orders error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
