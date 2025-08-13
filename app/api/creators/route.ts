import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const location = searchParams.get("location")
    const platform = searchParams.get("platform")

    const db = await getDatabase()

    const query: any = {}

    if (category && category !== "all") {
      query.categories = { $regex: category, $options: "i" }
    }

    if (location) {
      query.location = { $regex: location, $options: "i" }
    }

    if (platform && platform !== "all") {
      query["platforms.platform"] = { $regex: platform, $options: "i" }
    }

    const creators = await db
      .collection("creatorProfiles")
      .find(query)
      .sort({ rating: -1, completedCampaigns: -1 })
      .limit(50)
      .toArray()

    return NextResponse.json(creators)
  } catch (error) {
    console.error("Get creators error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
