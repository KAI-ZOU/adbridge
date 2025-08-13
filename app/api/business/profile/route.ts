import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"
import type { BusinessProfile } from "@/lib/models/business"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const db = await getDatabase()

    const businessProfile: BusinessProfile = {
      userId: session.user.id,
      companyName: data.companyName,
      industry: data.industry,
      companySize: data.companySize,
      website: data.website,
      location: data.location,
      description: data.description,
      budget: data.budget,
      goals: data.goals,
      platforms: data.platforms,
      targetAudience: data.targetAudience,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("businessProfiles").insertOne(businessProfile)

    // Update user role
    await db
      .collection("users")
      .updateOne({ _id: session.user.id }, { $set: { role: "business", updatedAt: new Date() } })

    return NextResponse.json(
      {
        message: "Business profile created successfully",
        profileId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Business profile creation error:", error)
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
    const profile = await db.collection("businessProfiles").findOne({ userId: session.user.id })

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error("Get business profile error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
