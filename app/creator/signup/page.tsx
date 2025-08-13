"use client"

import type React from "react"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Sparkles,
  Instagram,
  Youtube,
  Twitter,
  MessageSquare,
  ArrowRight,
  Check,
  Plus,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function CreatorSignupPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    creatorName: "",
    handle: "",
    bio: "",
    location: "",
    categories: [] as string[],
    platforms: [] as { platform: string; handle: string; followers: string }[],
    contentTypes: [] as string[],
    rates: {
      shoutout: "",
      story: "",
      retweet: "",
      collab: "",
    },
    portfolio: [] as string[],
  })

  const categories = [
    "Fashion & Beauty",
    "Food & Cooking",
    "Fitness & Health",
    "Technology",
    "Travel",
    "Lifestyle",
    "Gaming",
    "Education",
    "Music",
    "Art & Design",
    "Business",
    "Comedy",
  ]

  const contentTypes = [
    "Photos",
    "Videos",
    "Stories",
    "Reels",
    "Live Streams",
    "Tutorials",
    "Reviews",
    "Unboxing",
    "Behind the Scenes",
    "Collaborations",
  ]

  const platformOptions = [
    { name: "Instagram", icon: Instagram },
    { name: "TikTok", icon: MessageSquare },
    { name: "YouTube", icon: Youtube },
    { name: "Twitter", icon: Twitter },
  ]

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const handleContentTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(type)
        ? prev.contentTypes.filter((t) => t !== type)
        : [...prev.contentTypes, type],
    }))
  }

  const addPlatform = () => {
    setFormData((prev) => ({
      ...prev,
      platforms: [...prev.platforms, { platform: "", handle: "", followers: "" }],
    }))
  }

  const removePlatform = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.filter((_, i) => i !== index),
    }))
  }

  const updatePlatform = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.map((platform, i) => (i === index ? { ...platform, [field]: value } : platform)),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/creator/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your creator profile has been created successfully.",
        })
        router.push("/creator/dashboard")
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.message || "Failed to create creator profile.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  if (!session) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to dashboard
            </Link>

            <div className="text-center">
              <div className="h-16 w-16 rounded-2xl bg-[#8ef0a7]/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-[#8ef0a7]" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Set Up Your Creator Profile</h1>
              <p className="text-white/70">Showcase your content and connect with businesses and other creators</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-[#8ef0a7] text-black" : "bg-white/10 text-white/60"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i}
                </div>
                {i < 4 && <div className={`w-8 h-1 mx-2 ${i < step ? "bg-[#8ef0a7]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-white mb-2">Basic Information</CardTitle>
                      <CardDescription className="text-white/70">Tell us about yourself as a creator</CardDescription>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="creatorName" className="text-white">
                          Creator Name *
                        </Label>
                        <Input
                          id="creatorName"
                          value={formData.creatorName}
                          onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Your display name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="handle" className="text-white">
                            Primary Handle *
                          </Label>
                          <Input
                            id="handle"
                            value={formData.handle}
                            onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="@yourusername"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="location" className="text-white">
                            Location *
                          </Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="City, State/Country"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="bio" className="text-white">
                          Bio *
                        </Label>
                        <Textarea
                          id="bio"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Tell us about your content style, personality, and what makes you unique..."
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white mb-3 block">Content Categories *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {categories.map((category) => (
                            <div
                              key={category}
                              onClick={() => handleCategoryToggle(category)}
                              className={`p-2 rounded-lg border cursor-pointer transition-all text-sm ${
                                formData.categories.includes(category)
                                  ? "bg-[#8ef0a7]/20 border-[#8ef0a7] text-[#8ef0a7]"
                                  : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`h-3 w-3 rounded border flex items-center justify-center ${
                                    formData.categories.includes(category)
                                      ? "bg-[#8ef0a7] border-[#8ef0a7]"
                                      : "border-white/40"
                                  }`}
                                >
                                  {formData.categories.includes(category) && <Check className="h-2 w-2 text-black" />}
                                </div>
                                <span className="text-xs">{category}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                      disabled={
                        !formData.creatorName ||
                        !formData.handle ||
                        !formData.location ||
                        !formData.bio ||
                        !formData.categories.length
                      }
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-white mb-2">Social Media Platforms</CardTitle>
                      <CardDescription className="text-white/70">
                        Add your social media accounts and follower counts
                      </CardDescription>
                    </div>

                    <div className="space-y-4">
                      {formData.platforms.map((platform, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-white font-medium">Platform {index + 1}</h4>
                            {formData.platforms.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removePlatform(index)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <Select
                              value={platform.platform}
                              onValueChange={(value) => updatePlatform(index, "platform", value)}
                            >
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Select platform" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-900 border-white/20">
                                {platformOptions.map((p) => (
                                  <SelectItem key={p.name} value={p.name}>
                                    {p.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Input
                              value={platform.handle}
                              onChange={(e) => updatePlatform(index, "handle", e.target.value)}
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                              placeholder="@username"
                            />
                            <Input
                              value={platform.followers}
                              onChange={(e) => updatePlatform(index, "followers", e.target.value)}
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                              placeholder="Followers (e.g., 10K)"
                            />
                          </div>
                        </div>
                      ))}

                      <Button
                        type="button"
                        onClick={addPlatform}
                        variant="outline"
                        className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Another Platform
                      </Button>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                        disabled={
                          !formData.platforms.length || !formData.platforms.every((p) => p.platform && p.handle)
                        }
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-white mb-2">Content & Services</CardTitle>
                      <CardDescription className="text-white/70">
                        What type of content do you create and what services do you offer?
                      </CardDescription>
                    </div>

                    <div>
                      <Label className="text-white mb-3 block">Content Types *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {contentTypes.map((type) => (
                          <div
                            key={type}
                            onClick={() => handleContentTypeToggle(type)}
                            className={`p-2 rounded-lg border cursor-pointer transition-all text-sm ${
                              formData.contentTypes.includes(type)
                                ? "bg-[#8ef0a7]/20 border-[#8ef0a7] text-[#8ef0a7]"
                                : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-3 w-3 rounded border flex items-center justify-center ${
                                  formData.contentTypes.includes(type)
                                    ? "bg-[#8ef0a7] border-[#8ef0a7]"
                                    : "border-white/40"
                                }`}
                              >
                                {formData.contentTypes.includes(type) && <Check className="h-2 w-2 text-black" />}
                              </div>
                              <span className="text-xs">{type}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                        disabled={!formData.contentTypes.length}
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-white mb-2">Service Rates</CardTitle>
                      <CardDescription className="text-white/70">
                        Set your rates for different types of collaborations (you can change these later)
                      </CardDescription>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="shoutout" className="text-white">
                          Shoutout Rate ($)
                        </Label>
                        <Input
                          id="shoutout"
                          type="number"
                          value={formData.rates.shoutout}
                          onChange={(e) =>
                            setFormData({ ...formData, rates: { ...formData.rates, shoutout: e.target.value } })
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="25"
                        />
                      </div>

                      <div>
                        <Label htmlFor="story" className="text-white">
                          Story Mention Rate ($)
                        </Label>
                        <Input
                          id="story"
                          type="number"
                          value={formData.rates.story}
                          onChange={(e) =>
                            setFormData({ ...formData, rates: { ...formData.rates, story: e.target.value } })
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="15"
                        />
                      </div>

                      <div>
                        <Label htmlFor="retweet" className="text-white">
                          Retweet/Share Rate ($)
                        </Label>
                        <Input
                          id="retweet"
                          type="number"
                          value={formData.rates.retweet}
                          onChange={(e) =>
                            setFormData({ ...formData, rates: { ...formData.rates, retweet: e.target.value } })
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="10"
                        />
                      </div>

                      <div>
                        <Label htmlFor="collab" className="text-white">
                          Collaboration Rate ($)
                        </Label>
                        <Input
                          id="collab"
                          type="number"
                          value={formData.rates.collab}
                          onChange={(e) =>
                            setFormData({ ...formData, rates: { ...formData.rates, collab: e.target.value } })
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="100"
                        />
                      </div>
                    </div>

                    <div className="bg-[#8ef0a7]/10 rounded-xl p-6 border border-[#8ef0a7]/20">
                      <h3 className="text-white font-semibold mb-2">You're all set! 🎉</h3>
                      <p className="text-white/80 text-sm">
                        Your creator profile will be created and you'll be able to start connecting with businesses and
                        other creators right away.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Profile..." : "Complete Setup"}
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
