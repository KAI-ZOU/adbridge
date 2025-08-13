export class TwitterAPI {
  private bearerToken: string

  constructor(bearerToken: string) {
    this.bearerToken = bearerToken
  }

  async getUserProfile(username: string) {
    try {
      const response = await fetch(
        `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics,verified`,
        {
          headers: {
            Authorization: `Bearer ${this.bearerToken}`,
          },
        },
      )
      return await response.json()
    } catch (error) {
      console.error("Twitter API error:", error)
      throw error
    }
  }

  async getUserTweets(userId: string) {
    try {
      const response = await fetch(
        `https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=public_metrics,created_at&max_results=10`,
        {
          headers: {
            Authorization: `Bearer ${this.bearerToken}`,
          },
        },
      )
      return await response.json()
    } catch (error) {
      console.error("Twitter API error:", error)
      throw error
    }
  }
}
