"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Users } from "lucide-react"

export default function CreatorSignup() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    creatorName: "",
    handle: "",
    bio: "",
    location: "",
    categories: [] as string[],
    platforms: [] as { platform: string; handle: string; followers: string }[],
    contentTypes: [] as string[],
    rates: {
      shoutout: 0,
      story: 0,
      retweet: 0,
      collab: 0,
    },
  })

  const categoryOptions = [
    "Fashion",
    "Beauty",
    "Fitness",
    "Food",
    "Travel",
    "Tech",
    "Gaming",
    "Lifestyle",
    "Business",
    "Education",
    "Entertainment",
  ]

  const platformOptions = ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn", "Facebook"]

  const contentTypeOptions = [
    "Photos",
    "Videos",
    "Stories",
    "Reels",
    "Live Streams",
    "Blog Posts",
    "Reviews",
    "Tutorials",
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, categories: [...prev.categories, category] }))
    } else {
      setFormData((prev) => ({ ...prev, categories: prev.categories.filter((c) => c !== category) }))
    }
  }

  const handleContentTypeChange = (contentType: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, contentTypes: [...prev.contentTypes, contentType] }))
    } else {
      setFormData((prev) => ({ ...prev, contentTypes: prev.contentTypes.filter((ct) => ct !== contentType) }))
    }
  }

  const addPlatform = () => {
    setFormData((prev) => ({
      ...prev,
      platforms: [...prev.platforms, { platform: "", handle: "", followers: "" }],
    }))
  }

  const updatePlatform = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    }))
  }

  const removePlatform = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/creator/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your creator profile has been created successfully.",
        })
        router.push("/creator/dashboard")
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to create creator profile",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error creating creator profile:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!session) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container max-w-2xl mx-auto px-4 relative z-10">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">Complete Your Creator Profile</CardTitle>
            <CardDescription className="text-white/70">Showcase your content and connect with brands</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="creatorName" className="text-white">
                    Creator Name *
                  </Label>
                  <Input
                    id="creatorName"
                    value={formData.creatorName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, creatorName: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your display name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="handle" className="text-white">
                    Primary Handle *
                  </Label>
                  <Input
                    id="handle"
                    value={formData.handle}
                    onChange={(e) => setFormData((prev) => ({ ...prev, handle: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="@yourusername"
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location" className="text-white">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="City, State/Country"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-white">
                  Bio *
                </Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                  placeholder="Tell us about yourself and your content..."
                  required
                />
              </div>

              <div className="space-y-3">
                <Label className="text-white">Content Categories *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categoryOptions.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={formData.categories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <Label htmlFor={category} className="text-white/80 text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-white">Content Types</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {contentTypeOptions.map((contentType) => (
                    <div key={contentType} className="flex items-center space-x-2">
                      <Checkbox
                        id={contentType}
                        checked={formData.contentTypes.includes(contentType)}
                        onCheckedChange={(checked) => handleContentTypeChange(contentType, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <Label htmlFor={contentType} className="text-white/80 text-sm">
                        {contentType}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-white">Social Media Platforms</Label>
                  <Button
                    type="button"
                    onClick={addPlatform}
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Add Platform
                  </Button>
                </div>
                {formData.platforms.map((platform, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 bg-white/5 rounded-lg">
                    <Select
                      value={platform.platform}
                      onValueChange={(value) => updatePlatform(index, "platform", value)}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platformOptions.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      value={platform.handle}
                      onChange={(e) => updatePlatform(index, "handle", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="@handle"
                    />
                    <Input
                      value={platform.followers}
                      onChange={(e) => updatePlatform(index, "followers", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Followers"
                    />
                    <Button
                      type="button"
                      onClick={() => removePlatform(index)}
                      variant="outline"
                      size="sm"
                      className="border-red-500/20 text-red-400 hover:bg-red-500/10"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Label className="text-white">Service Rates (USD)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="shoutout" className="text-white/80 text-sm">
                      Shoutout
                    </Label>
                    <Input
                      id="shoutout"
                      type="number"
                      value={formData.rates.shoutout}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          rates: { ...prev.rates, shoutout: Number(e.target.value) },
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="story" className="text-white/80 text-sm">
                      Story
                    </Label>
                    <Input
                      id="story"
                      type="number"
                      value={formData.rates.story}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          rates: { ...prev.rates, story: Number(e.target.value) },
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retweet" className="text-white/80 text-sm">
                      Retweet
                    </Label>
                    <Input
                      id="retweet"
                      type="number"
                      value={formData.rates.retweet}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          rates: { ...prev.rates, retweet: Number(e.target.value) },
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="collab" className="text-white/80 text-sm">
                      Collaboration
                    </Label>
                    <Input
                      id="collab"
                      type="number"
                      value={formData.rates.collab}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          rates: { ...prev.rates, collab: Number(e.target.value) },
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Creating Profile...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
