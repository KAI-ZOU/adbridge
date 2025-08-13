import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()

    // Verify user is part of conversation
    const conversation = await db.collection("conversations").findOne({
      _id: params.conversationId,
      participants: session.user.id,
    })

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
    }

    // Get messages
    const messages = await db
      .collection("messages")
      .find({ conversationId: params.conversationId })
      .sort({ timestamp: 1 })
      .toArray()

    return NextResponse.json({ conversation, messages })
  } catch (error) {
    console.error("Get messages error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { message } = await request.json()
    const db = await getDatabase()

    // Verify user is part of conversation
    const conversation = await db.collection("conversations").findOne({
      _id: params.conversationId,
      participants: session.user.id,
    })

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
    }

    // Create message
    const newMessage = {
      conversationId: params.conversationId,
      senderId: session.user.id,
      message,
      timestamp: new Date(),
    }

    const result = await db.collection("messages").insertOne(newMessage)

    // Update conversation last message
    await db.collection("conversations").updateOne(
      { _id: params.conversationId },
      {
        $set: {
          lastMessage: {
            senderId: session.user.id,
            message,
            timestamp: new Date(),
          },
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ messageId: result.insertedId })
  } catch (error) {
    console.error("Send message error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
