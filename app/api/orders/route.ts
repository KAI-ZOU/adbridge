import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { serviceId, creatorId, amount, requirements } = await request.json()
    const db = await getDatabase()

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "usd",
      metadata: {
        serviceId,
        creatorId,
        buyerId: session.user.id,
      },
    })

    // Create order
    const order = {
      serviceId,
      creatorId,
      buyerId: session.user.id,
      amount,
      status: "pending",
      stripePaymentIntentId: paymentIntent.id,
      requirements,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("orders").insertOne(order)

    // Create conversation
    const conversation = {
      participants: [session.user.id, creatorId],
      orderId: result.insertedId.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection("conversations").insertOne(conversation)

    return NextResponse.json({
      orderId: result.insertedId,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get("orderId")

    const db = await getDatabase()

    if (orderId) {
      const order = await db.collection("orders").findOne({ _id: orderId })
      return NextResponse.json(order)
    }

    // Get user's orders
    const orders = await db
      .collection("orders")
      .find({
        $or: [{ buyerId: session.user.id }, { creatorId: session.user.id }],
      })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(orders)
  } catch (error) {
    console.error("Get orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
