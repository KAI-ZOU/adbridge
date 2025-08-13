import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()
    const user = await db.collection("users").findOne({
      email: session.user.email,
    })

    if (!user) {
      // Create user record if it doesn't exist
      const newUser = {
        email: session.user.email,
        name: session.user.name || "",
        image: session.user.image || "",
        accountType: null,
        profileCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      await db.collection("users").insertOne(newUser)
      return NextResponse.json(newUser)
    }

    return NextResponse.json({
      email: user.email,
      name: user.name,
      image: user.image,
      accountType: user.accountType,
      profileCompleted: user.profileCompleted,
    })
  } catch (error) {
    console.error("Error fetching user account:", error)
    return NextResponse.json({ error: "Failed to fetch user account" }, { status: 500 })
  }
}
