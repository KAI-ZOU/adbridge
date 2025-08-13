import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import type { CreatorProfile } from "@/lib/models/creator"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    // Check if profile already exists
    const existingProfile = await db.collection("creatorProfiles").findOne({
      userId: session.user.email,
    })

    if (existingProfile) {
      return NextResponse.json({ error: "Creator profile already exists" }, { status: 400 })
    }

    const creatorProfile: CreatorProfile = {
      userId: session.user.email,
      creatorName: data.creatorName,
      handle: data.handle,
      bio: data.bio,
      location: data.location,
      categories: data.categories || [],
      platforms: data.platforms || [],
      contentTypes: data.contentTypes || [],
      rates: {
        shoutout: Number.parseFloat(data.rates?.shoutout) || 0,
        story: Number.parseFloat(data.rates?.story) || 0,
        retweet: Number.parseFloat(data.rates?.retweet) || 0,
        collab: Number.parseFloat(data.rates?.collab) || 0,
      },
      portfolio: data.portfolio || [],
      rating: 5.0,
      totalEarnings: 0,
      completedCampaigns: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("creatorProfiles").insertOne(creatorProfile)

    // Update user role in users collection
    await db.collection("users").updateOne(
      { email: session.user.email },
      {
        $set: {
          role: "creator",
          updatedAt: new Date(),
        },
        $setOnInsert: {
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
          createdAt: new Date(),
        },
      },
      { upsert: true },
    )

    return NextResponse.json(
      {
        message: "Creator profile created successfully",
        profileId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Creator profile creation error:", error)
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

    const db = await getDatabase()
    const profile = await db.collection("creatorProfiles").findOne({
      userId: session.user.email,
    })

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error("Get creator profile error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    const updateData = {
      ...data,
      updatedAt: new Date(),
    }

    const result = await db
      .collection("creatorProfiles")
      .updateOne({ userId: session.user.email }, { $set: updateData })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Profile updated successfully" })
  } catch (error) {
    console.error("Update creator profile error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
