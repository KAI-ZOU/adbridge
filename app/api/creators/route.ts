import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const platform = searchParams.get("platform")
    const minFollowers = searchParams.get("minFollowers")
    const maxPrice = searchParams.get("maxPrice")
    const search = searchParams.get("search")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    const db = await getDatabase()

    // Build filter query
    const filter: any = {}

    if (category && category !== "all") {
      filter.categories = { $in: [category] }
    }

    if (platform && platform !== "all") {
      filter["platforms.platform"] = platform
    }

    if (search) {
      filter.$or = [
        { creatorName: { $regex: search, $options: "i" } },
        { bio: { $regex: search, $options: "i" } },
        { categories: { $in: [new RegExp(search, "i")] } },
      ]
    }

    // Get total count for pagination
    const total = await db.collection("creatorProfiles").countDocuments(filter)

    // Get creators with pagination
    const creators = await db
      .collection("creatorProfiles")
      .find(filter)
      .sort({ rating: -1, completedCampaigns: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    // Transform data for frontend
    const transformedCreators = creators.map((creator) => ({
      id: creator._id.toString(),
      name: creator.creatorName,
      handle: creator.handle,
      bio: creator.bio,
      location: creator.location,
      categories: creator.categories,
      platforms: creator.platforms,
      contentTypes: creator.contentTypes,
      rates: creator.rates,
      rating: creator.rating,
      completedCampaigns: creator.completedCampaigns,
      totalEarnings: creator.totalEarnings,
      image: `/placeholder-user.jpg`, // You can add profile images later
    }))

    return NextResponse.json({
      creators: transformedCreators,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Get creators error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
