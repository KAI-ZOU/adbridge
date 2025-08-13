import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import type { CreatorProfile } from "@/lib/models/creator"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    const creatorProfile: CreatorProfile = {
      userId: session.user.id,
      creatorName: data.creatorName,
      handle: data.handle,
      bio: data.bio,
      location: data.location,
      categories: data.categories,
      platforms: data.platforms,
      contentTypes: data.contentTypes,
      rates: {
        shoutout: Number.parseFloat(data.rates.shoutout) || 0,
        story: Number.parseFloat(data.rates.story) || 0,
        retweet: Number.parseFloat(data.rates.retweet) || 0,
        collab: Number.parseFloat(data.rates.collab) || 0,
      },
      portfolio: data.portfolio || [],
      rating: 5.0,
      totalEarnings: 0,
      completedCampaigns: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("creatorProfiles").insertOne(creatorProfile)

    // Update user role
    await db
      .collection("users")
      .updateOne({ _id: session.user.id }, { $set: { role: "creator", updatedAt: new Date() } })

    return NextResponse.json(
      {
        message: "Creator profile created successfully",
        profileId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Creator profile creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()
    const profile = await db.collection("creatorProfiles").findOne({ userId: session.user.id })

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error("Get creator profile error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
