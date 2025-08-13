import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { getDatabase } from "@/lib/mongodb"
import type { CreatorProfile } from "@/lib/models/creator"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    // Validate required fields
    const requiredFields = ["creatorName", "handle", "bio", "location", "categories"]
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
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
        shoutout: data.rates?.shoutout || 0,
        story: data.rates?.story || 0,
        retweet: data.rates?.retweet || 0,
        collab: data.rates?.collab || 0,
      },
      portfolio: data.portfolio || [],
      rating: 0,
      totalEarnings: 0,
      completedCampaigns: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Insert creator profile
    const result = await db.collection("creatorProfiles").insertOne(creatorProfile)

    // Update user account type and profile completion status
    await db.collection("users").updateOne(
      { email: session.user.email },
      {
        $set: {
          accountType: "creator",
          profileCompleted: true,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    )

    return NextResponse.json({
      success: true,
      profileId: result.insertedId,
      message: "Creator profile created successfully",
    })
  } catch (error) {
    console.error("Error creating creator profile:", error)
    return NextResponse.json({ error: "Failed to create creator profile" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

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
    console.error("Error fetching creator profile:", error)
    return NextResponse.json({ error: "Failed to fetch creator profile" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession()
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
