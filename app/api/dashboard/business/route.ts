import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()

    // Get business profile
    const businessProfile = await db.collection("businessProfiles").findOne({ userId: session.user.id })
    if (!businessProfile) {
      return NextResponse.json({ error: "Business profile not found" }, { status: 404 })
    }

    // Get campaigns
    const campaigns = await db
      .collection("campaigns")
      .find({ businessId: businessProfile._id.toString() })
      .sort({ createdAt: -1 })
      .toArray()

    // Get creators in the same location
    const creators = await db
      .collection("creatorProfiles")
      .find({
        location: { $regex: businessProfile.location.split(",")[0], $options: "i" },
        categories: { $in: businessProfile.goals },
      })
      .limit(20)
      .toArray()

    // Calculate stats
    const activeCampaigns = campaigns.filter((c) => c.status === "active").length
    const totalBudget = campaigns.reduce((sum, c) => sum + (c.budget || 0), 0)
    const completedCampaigns = campaigns.filter((c) => c.status === "completed").length

    const stats = {
      activeCampaigns,
      totalCreators: creators.length,
      totalBudget: `$${totalBudget.toLocaleString()}`,
      avgEngagement: "4.2%", // This would be calculated from actual campaign data
    }

    return NextResponse.json({
      stats,
      campaigns: campaigns.slice(0, 10),
      creators: creators.slice(0, 10),
      businessProfile,
    })
  } catch (error) {
    console.error("Business dashboard error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
