export interface User {
  _id?: string
  email: string
  name: string
  image?: string
  accountType?: "business" | "creator" | null
  profileCompleted: boolean
  createdAt: Date
  updatedAt: Date
}
