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

    // Get creator profile
    const creatorProfile = await db.collection("creatorProfiles").findOne({ userId: session.user.id })
    if (!creatorProfile) {
      return NextResponse.json({ error: "Creator profile not found" }, { status: 404 })
    }

    // Get orders
    const orders = await db
      .collection("orders")
      .find({ creatorId: creatorProfile._id.toString() })
      .sort({ createdAt: -1 })
      .toArray()

    // Get opportunities (campaigns in same location/categories)
    const opportunities = await db
      .collection("campaigns")
      .aggregate([
        {
          $lookup: {
            from: "businessProfiles",
            localField: "businessId",
            foreignField: "_id",
            as: "business",
          },
        },
        {
          $match: {
            status: "active",
            $or: [
              { "business.location": { $regex: creatorProfile.location.split(",")[0], $options: "i" } },
              { platforms: { $in: creatorProfile.platforms.map((p) => p.platform) } },
            ],
          },
        },
        { $limit: 10 },
      ])
      .toArray()

    // Calculate stats
    const totalEarnings = orders.filter((o) => o.status === "completed").reduce((sum, o) => sum + o.amount, 0)

    const activeOrders = orders.filter((o) => ["paid", "in_progress"].includes(o.status)).length
    const pendingEarnings = orders.filter((o) => o.status === "in_progress").reduce((sum, o) => sum + o.amount, 0)

    const stats = {
      totalEarnings: `$${totalEarnings.toLocaleString()}`,
      activeCampaigns: activeOrders,
      avgEngagement: "6.2%", // This would be calculated from social media APIs
      profileViews: Math.floor(Math.random() * 3000) + 1000, // This would be tracked
    }

    return NextResponse.json({
      stats,
      orders: orders.slice(0, 10),
      opportunities: opportunities.slice(0, 5),
      creatorProfile,
    })
  } catch (error) {
    console.error("Creator dashboard error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
