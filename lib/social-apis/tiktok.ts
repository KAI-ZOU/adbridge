export class TikTokAPI {
  private accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async getUserProfile() {
    try {
      const response = await fetch("https://open-api.tiktok.com/user/info/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            "open_id",
            "union_id",
            "avatar_url",
            "display_name",
            "follower_count",
            "following_count",
            "likes_count",
            "video_count",
          ],
        }),
      })
      return await response.json()
    } catch (error) {
      console.error("TikTok API error:", error)
      throw error
    }
  }

  async getUserVideos() {
    try {
      const response = await fetch("https://open-api.tiktok.com/video/list/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            "id",
            "title",
            "video_description",
            "duration",
            "cover_image_url",
            "create_time",
            "view_count",
            "like_count",
            "comment_count",
            "share_count",
          ],
        }),
      })
      return await response.json()
    } catch (error) {
      console.error("TikTok API error:", error)
      throw error
    }
  }
}
