export interface Conversation {
  _id?: string
  participants: string[]
  orderId?: string
  lastMessage?: {
    senderId: string
    message: string
    timestamp: Date
  }
  createdAt: Date
  updatedAt: Date
}

export interface Message {
  _id?: string
  conversationId: string
  senderId: string
  message: string
  attachments?: string[]
  timestamp: Date
}
