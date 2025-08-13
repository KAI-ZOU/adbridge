export class InstagramAPI {
  private accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async getUserProfile() {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${this.accessToken}`,
      )
      return await response.json()
    } catch (error) {
      console.error("Instagram API error:", error)
      throw error
    }
  }

  async getUserMedia() {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${this.accessToken}`,
      )
      return await response.json()
    } catch (error) {
      console.error("Instagram API error:", error)
      throw error
    }
  }

  async getInsights(mediaId: string) {
    try {
      const response = await fetch(
        `https://graph.instagram.com/${mediaId}/insights?metric=engagement,impressions,reach&access_token=${this.accessToken}`,
      )
      return await response.json()
    } catch (error) {
      console.error("Instagram API error:", error)
      throw error
    }
  }
}
