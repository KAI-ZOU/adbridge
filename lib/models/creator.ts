export interface CreatorProfile {
  _id?: string
  userId: string
  creatorName: string
  handle: string
  bio: string
  location: string
  categories: string[]
  platforms: {
    platform: string
    handle: string
    followers: string
    accessToken?: string
    refreshToken?: string
  }[]
  contentTypes: string[]
  rates: {
    shoutout: number
    story: number
    retweet: number
    collab: number
  }
  portfolio: string[]
  rating: number
  totalEarnings: number
  completedCampaigns: number
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  _id?: string
  creatorId: string
  type: "shoutout" | "story" | "retweet" | "collab"
  platform: string
  price: number
  description: string
  deliveryTime: string
  isActive: boolean
  createdAt: Date
}

export interface Order {
  _id?: string
  serviceId: string
  creatorId: string
  buyerId: string
  amount: number
  status: "pending" | "paid" | "in_progress" | "completed" | "cancelled"
  stripePaymentIntentId?: string
  requirements?: string
  deliverables?: string[]
  messages: {
    senderId: string
    message: string
    timestamp: Date
  }[]
  createdAt: Date
  updatedAt: Date
}
