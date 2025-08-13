import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()
    const order = await db.collection("orders").findOne({
      _id: { $oid: params.conversationId },
      $or: [{ creatorId: session.user.email }, { buyerId: session.user.email }],
    })

    if (!order) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
    }

    return NextResponse.json({ messages: order.messages || [] })
  } catch (error) {
    console.error("Get messages error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { message } = await request.json()
    const db = await getDatabase()

    const newMessage = {
      senderId: session.user.email,
      message,
      timestamp: new Date(),
    }

    const result = await db.collection("orders").updateOne(
      {
        _id: { $oid: params.conversationId },
        $or: [{ creatorId: session.user.email }, { buyerId: session.user.email }],
      },
      {
        $push: { messages: newMessage },
        $set: { updatedAt: new Date() },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Send message error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
