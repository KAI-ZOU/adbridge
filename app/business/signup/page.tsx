"use client"

import type React from "react"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Building2, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BusinessSignupPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [step, setStep] = useState(1)
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
    "Fashion & Beauty",
    "Food & Beverage",
    "Health & Fitness",
    "Travel & Tourism",
    "Education",
    "Finance",
    "Real Estate",
    "Entertainment",
    "Other",
  ]

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ]

  const budgetRanges = ["$500-$2,000", "$2,000-$5,000", "$5,000-$10,000", "$10,000-$25,000", "$25,000+"]

  const marketingGoals = [
    "Brand Awareness",
    "Lead Generation",
    "Sales Growth",
    "Product Launch",
    "Community Building",
    "Content Creation",
  ]

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn", "Facebook"]

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the data to your database
    console.log("Business signup data:", formData)
    // Redirect to business dashboard
    router.push("/business/dashboard")
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
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
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
              <div className="h-16 w-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Set Up Your Business Profile</h1>
              <p className="text-white/70">Tell us about your business so we can match you with the right creators</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-[#8ef0a7] text-black" : "bg-white/10 text-white/60"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i}
                </div>
                {i < 3 && <div className={`w-12 h-1 mx-2 ${i < step ? "bg-[#8ef0a7]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-white mb-2">Company Information</CardTitle>
                      <CardDescription className="text-white/70">Basic details about your business</CardDescription>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="companyName" className="text-white">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Enter your company name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="industry" className="text-white">
                            Industry *
                          </Label>
                          <Select
                            value={formData.industry}
                            onValueChange={(value) => setFormData({ ...formData, industry: value })}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-white/20">
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="companySize" className="text-white">
                            Company Size *
                          </Label>
                          <Select
                            value={formData.companySize}
                            onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-white/20">
                              {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="website" className="text-white">
                            Website
                          </Label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="https://yourwebsite.com"
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
                        <Label htmlFor="description" className="text-white">
                          Company Description *
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Tell us about your business, products, and what makes you unique..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                      disabled={
                        !formData.companyName ||
                        !formData.industry ||
                        !formData.companySize ||
                        !formData.location ||
                        !formData.description
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
                      <CardTitle className="text-white mb-2">Marketing Goals & Budget</CardTitle>
                      <CardDescription className="text-white/70">
                        Help us understand your marketing objectives
                      </CardDescription>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label className="text-white mb-3 block">Marketing Goals *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {marketingGoals.map((goal) => (
                            <div
                              key={goal}
                              onClick={() => handleGoalToggle(goal)}
                              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                                formData.goals.includes(goal)
                                  ? "bg-[#8ef0a7]/20 border-[#8ef0a7] text-[#8ef0a7]"
                                  : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`h-4 w-4 rounded border-2 flex items-center justify-center ${
                                    formData.goals.includes(goal) ? "bg-[#8ef0a7] border-[#8ef0a7]" : "border-white/40"
                                  }`}
                                >
                                  {formData.goals.includes(goal) && <Check className="h-2 w-2 text-black" />}
                                </div>
                                <span className="text-sm font-medium">{goal}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="text-white">
                          Monthly Marketing Budget *
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-white/20">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="targetAudience" className="text-white">
                          Target Audience *
                        </Label>
                        <Textarea
                          id="targetAudience"
                          value={formData.targetAudience}
                          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Describe your ideal customers (age, interests, demographics, etc.)"
                          rows={3}
                          required
                        />
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
                        disabled={!formData.goals.length || !formData.budget || !formData.targetAudience}
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
                      <CardTitle className="text-white mb-2">Platform Preferences</CardTitle>
                      <CardDescription className="text-white/70">
                        Which platforms do you want to focus on?
                      </CardDescription>
                    </div>

                    <div>
                      <Label className="text-white mb-3 block">Preferred Platforms *</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {platforms.map((platform) => (
                          <div
                            key={platform}
                            onClick={() => handlePlatformToggle(platform)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              formData.platforms.includes(platform)
                                ? "bg-[#8ef0a7]/20 border-[#8ef0a7] text-[#8ef0a7]"
                                : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                                  formData.platforms.includes(platform)
                                    ? "bg-[#8ef0a7] border-[#8ef0a7]"
                                    : "border-white/40"
                                }`}
                              >
                                {formData.platforms.includes(platform) && <Check className="h-3 w-3 text-black" />}
                              </div>
                              <span className="font-medium">{platform}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#8ef0a7]/10 rounded-xl p-6 border border-[#8ef0a7]/20">
                      <h3 className="text-white font-semibold mb-2">You're all set! 🎉</h3>
                      <p className="text-white/80 text-sm">
                        Your business profile will be created and you'll be able to start discovering creators right
                        away.
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
                        disabled={!formData.platforms.length}
                      >
                        Complete Setup
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
