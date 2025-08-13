export interface BusinessProfile {
  _id?: string
  userId: string
  companyName: string
  industry: string
  companySize: string
  website?: string
  location: string
  description: string
  budget: string
  goals: string[]
  platforms: string[]
  targetAudience: string
  createdAt: Date
  updatedAt: Date
}

export interface Campaign {
  _id?: string
  businessId: string
  name: string
  description: string
  budget: number
  platform: string
  contentType: string
  requirements: string[]
  deadline: Date
  status: "draft" | "active" | "completed" | "cancelled"
  applicants: string[]
  selectedCreators: string[]
  createdAt: Date
  updatedAt: Date
}
