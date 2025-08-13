import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
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

    const { priceId, planName } = await request.json()

    // Create or retrieve customer
    let customer
    try {
      const customers = await stripe.customers.list({
        email: session.user.email!,
        limit: 1,
      })

      if (customers.data.length > 0) {
        customer = customers.data[0]
      } else {
        customer = await stripe.customers.create({
          email: session.user.email!,
          name: session.user.name!,
          metadata: {
            userId: session.user.id,
          },
        })
      }
    } catch (error) {
      console.error("Customer creation error:", error)
      return NextResponse.json({ error: "Failed to create customer" }, { status: 500 })
    }

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing?cancelled=true`,
      metadata: {
        userId: session.user.id,
        planName,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Subscription creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
