"use client"
import {
  DollarSign,
  TrendingUp,
  Eye,
  MessageSquare,
  Calendar,
  Star,
  MapPin,
  Briefcase,
  Settings,
  Plus,
  Clock,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CreatorDashboard() {
  const stats = [
    { title: "Total Earnings", value: "$3,240", change: "+$320", icon: DollarSign, color: "text-[#8ef0a7]" },
    { title: "Active Campaigns", value: "5", change: "+2", icon: Briefcase, color: "text-blue-400" },
    { title: "Avg. Engagement", value: "6.2%", change: "+0.8%", icon: TrendingUp, color: "text-purple-400" },
    { title: "Profile Views", value: "2,148", change: "+156", icon: Eye, color: "text-yellow-400" },
  ]

  const opportunities = [
    {
      id: 1,
      businessName: "Bloom Boutique",
      businessAvatar: "/placeholder.svg?height=40&width=40",
      campaign: "Spring Collection Showcase",
      budget: "$200",
      deadline: "2024-02-20",
      platform: "Instagram",
      contentType: "Reel + Stories",
      description:
        "Looking for fashion creators to showcase our new spring collection. Must align with sustainable fashion values.",
      requirements: ["1 Reel (30-60s)", "3 Story slides", "Sustainable fashion focus"],
      location: "San Francisco, CA",
      postedAgo: "2 hours ago",
    },
    {
      id: 2,
      businessName: "TechStart Inc",
      businessAvatar: "/placeholder.svg?height=40&width=40",
      campaign: "App Launch Promotion",
      budget: "$150",
      deadline: "2024-02-25",
      platform: "TikTok",
      contentType: "Video Review",
      description: "Seeking tech reviewers to create authentic app review content for our productivity app launch.",
      requirements: ["1 TikTok video (60s)", "Authentic review", "Show app in use"],
      location: "San Francisco, CA",
      postedAgo: "1 day ago",
    },
  ]

  const activeCampaigns = [
    {
      id: 1,
      businessName: "Local Eats Co",
      campaign: "New Menu Launch",
      status: "in-progress",
      progress: 75,
      earnings: "$120",
      deadline: "2024-02-15",
      deliverables: ["1 TikTok video", "2 Instagram posts"],
      completed: ["TikTok video"],
      pending: ["Instagram posts"],
    },
    {
      id: 2,
      businessName: "Fitness Plus",
      campaign: "Workout Gear Review",
      status: "review",
      progress: 100,
      earnings: "$80",
      deadline: "2024-02-10",
      deliverables: ["1 YouTube video", "Instagram story"],
      completed: ["YouTube video", "Instagram story"],
      pending: [],
    },
  ]

  const earnings = {
    thisMonth: "$420",
    lastMonth: "$380",
    pending: "$200",
    total: "$3,240",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-white">Creator Dashboard</h1>
                <p className="text-white/60 text-sm">Welcome back, @sarahcreates</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                <Plus className="h-4 w-4 mr-2" />
                Update Portfolio
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                      <span className={`text-xs ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="opportunities" className="space-y-8">
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger
              value="opportunities"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Opportunities
            </TabsTrigger>
            <TabsTrigger
              value="campaigns"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Active Campaigns
            </TabsTrigger>
            <TabsTrigger
              value="earnings"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Earnings
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Available Opportunities</h2>
                <p className="text-white/60">Campaigns matched to your profile and interests</p>
              </div>
              <Badge className="bg-[#8ef0a7]/20 text-[#8ef0a7] border-[#8ef0a7]/30">
                {opportunities.length} New Matches
              </Badge>
            </div>

            <div className="space-y-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={opportunity.businessAvatar || "/placeholder.svg"}
                          alt={opportunity.businessName}
                        />
                        <AvatarFallback>
                          {opportunity.businessName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-white">{opportunity.businessName}</h3>
                            <p className="text-white/60 text-sm">{opportunity.campaign}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#8ef0a7] font-bold text-lg">{opportunity.budget}</p>
                            <p className="text-white/60 text-xs">{opportunity.postedAgo}</p>
                          </div>
                        </div>

                        <p className="text-white/80 text-sm mb-4">{opportunity.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <span className="text-white/60 text-xs">Platform</span>
                            <p className="text-white text-sm font-medium">{opportunity.platform}</p>
                          </div>
                          <div>
                            <span className="text-white/60 text-xs">Content Type</span>
                            <p className="text-white text-sm font-medium">{opportunity.contentType}</p>
                          </div>
                          <div>
                            <span className="text-white/60 text-xs">Deadline</span>
                            <p className="text-white text-sm font-medium flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(opportunity.deadline).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="text-white/60 text-xs">Requirements</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {opportunity.requirements.map((req, index) => (
                              <Badge key={index} variant="outline" className="border-white/20 text-white/80 text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-white/60 text-sm">
                            <MapPin className="h-3 w-3" />
                            {opportunity.location}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Active Campaigns</h2>
                <p className="text-white/60">Your ongoing collaborations and deliverables</p>
              </div>
            </div>

            <div className="space-y-6">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-white">{campaign.businessName}</h3>
                        <p className="text-white/60 text-sm">{campaign.campaign}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          className={
                            campaign.status === "in-progress"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : campaign.status === "review"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-green-500/20 text-green-400 border-green-500/30"
                          }
                        >
                          {campaign.status === "in-progress"
                            ? "In Progress"
                            : campaign.status === "review"
                              ? "Under Review"
                              : "Completed"}
                        </Badge>
                        <span className="text-[#8ef0a7] font-bold">{campaign.earnings}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/60 text-sm">Campaign Progress</span>
                          <span className="text-white text-sm">{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="h-2 bg-white/10" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/60 text-xs">Completed</span>
                          <div className="space-y-1 mt-1">
                            {campaign.completed.map((item, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-white/80">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-white/60 text-xs">Pending</span>
                          <div className="space-y-1 mt-1">
                            {campaign.pending.length > 0 ? (
                              campaign.pending.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-yellow-400" />
                                  <span className="text-white/80">{item}</span>
                                </div>
                              ))
                            ) : (
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-green-400">All deliverables completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <div className="flex items-center gap-1 text-white/60 text-sm">
                          <Calendar className="h-3 w-3" />
                          Due: {new Date(campaign.deadline).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                            View Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-[#8ef0a7] mx-auto mb-2" />
                  <p className="text-white/60 text-sm">This Month</p>
                  <p className="text-2xl font-bold text-white">{earnings.thisMonth}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Last Month</p>
                  <p className="text-2xl font-bold text-white">{earnings.lastMonth}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Pending</p>
                  <p className="text-2xl font-bold text-white">{earnings.pending}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Total Earned</p>
                  <p className="text-2xl font-bold text-white">{earnings.total}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Payment History</CardTitle>
                <CardDescription className="text-white/60">Your recent earnings and payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-white/60">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Payment history will appear here</p>
                  <p className="text-sm">Complete your first campaign to see earnings</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Profile Management</CardTitle>
                <CardDescription className="text-white/60">Update your creator profile and portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-white/60">
                  <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Profile settings</p>
                  <p className="text-sm">Manage your creator profile, portfolio, and preferences</p>
                  <Button className="mt-4 bg-[#8ef0a7] hover:bg-[#7de096] text-black">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
