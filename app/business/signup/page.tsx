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
import { Loader2, Building2 } from "lucide-react"

export default function BusinessSignup() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    location: "",
    description: "",
    budget: "",
    goals: [] as string[],
    platforms: [] as string[],
    targetAudience: "",
  })

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail",
    "Food & Beverage",
    "Fashion",
    "Beauty",
    "Fitness",
    "Travel",
    "Education",
    "Real Estate",
    "Other",
  ]

  const companySizes = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"]

  const budgetRanges = ["$500-$1,000", "$1,000-$5,000", "$5,000-$10,000", "$10,000-$25,000", "$25,000+"]

  const goalOptions = [
    "Brand Awareness",
    "Lead Generation",
    "Sales",
    "Website Traffic",
    "Social Media Growth",
    "Product Launch",
    "Event Promotion",
  ]

  const platformOptions = ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn", "Facebook"]

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, goals: [...prev.goals, goal] }))
    } else {
      setFormData((prev) => ({ ...prev, goals: prev.goals.filter((g) => g !== goal) }))
    }
  }

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, platforms: [...prev.platforms, platform] }))
    } else {
      setFormData((prev) => ({ ...prev, platforms: prev.platforms.filter((p) => p !== platform) }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/business/profile", {
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
          description: "Your business profile has been created successfully.",
        })
        router.push("/business/dashboard")
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to create business profile",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error creating business profile:", error)
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
              <div className="h-16 w-16 rounded-full bg-[#8ef0a7] flex items-center justify-center">
                <Building2 className="h-8 w-8 text-black" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">Complete Your Business Profile</CardTitle>
            <CardDescription className="text-white/70">
              Tell us about your business to get matched with the right creators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-white">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-white">
                    Industry *
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-white">
                    Company Size *
                  </Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, companySize: value }))}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-white">
                    Website
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="space-y-2">
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

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white">
                    Monthly Budget *
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  Company Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                  placeholder="Tell us about your company and what you do..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-white">
                  Target Audience
                </Label>
                <Textarea
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, targetAudience: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Describe your target audience demographics and interests..."
                />
              </div>

              <div className="space-y-3">
                <Label className="text-white">Marketing Goals</Label>
                <div className="grid grid-cols-2 gap-3">
                  {goalOptions.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.goals.includes(goal)}
                        onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-[#8ef0a7] data-[state=checked]:border-[#8ef0a7]"
                      />
                      <Label htmlFor={goal} className="text-white/80 text-sm">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-white">Preferred Platforms</Label>
                <div className="grid grid-cols-3 gap-3">
                  {platformOptions.map((platform) => (
                    <div key={platform} className="flex items-center space-x-2">
                      <Checkbox
                        id={platform}
                        checked={formData.platforms.includes(platform)}
                        onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-[#8ef0a7] data-[state=checked]:border-[#8ef0a7]"
                      />
                      <Label htmlFor={platform} className="text-white/80 text-sm">
                        {platform}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold py-3 rounded-xl"
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
