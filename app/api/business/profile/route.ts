import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import type { BusinessProfile } from "@/lib/models/business"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    // Check if profile already exists
    const existingProfile = await db.collection("businessProfiles").findOne({
      userId: session.user.email,
    })

    if (existingProfile) {
      return NextResponse.json({ error: "Business profile already exists" }, { status: 400 })
    }

    const businessProfile: BusinessProfile = {
      userId: session.user.email,
      companyName: data.companyName,
      industry: data.industry,
      companySize: data.companySize,
      website: data.website || "",
      location: data.location,
      description: data.description,
      budget: data.budget,
      goals: data.goals || [],
      platforms: data.platforms || [],
      targetAudience: data.targetAudience,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("businessProfiles").insertOne(businessProfile)

    // Update user role in users collection
    await db.collection("users").updateOne(
      { email: session.user.email },
      {
        $set: {
          role: "business",
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
        message: "Business profile created successfully",
        profileId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Business profile creation error:", error)
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
    const profile = await db.collection("businessProfiles").findOne({
      userId: session.user.email,
    })

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error("Get business profile error:", error)
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
      .collection("businessProfiles")
      .updateOne({ userId: session.user.email }, { $set: updateData })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Profile updated successfully" })
  } catch (error) {
    console.error("Update business profile error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
