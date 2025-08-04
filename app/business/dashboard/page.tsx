"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  MessageSquare,
  Star,
  MapPin,
  Calendar,
  BarChart3,
  Plus,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BusinessDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    { title: "Active Campaigns", value: "12", change: "+2", icon: TrendingUp, color: "text-[#8ef0a7]" },
    { title: "Total Creators", value: "48", change: "+8", icon: Users, color: "text-blue-400" },
    { title: "Campaign Budget", value: "$2,450", change: "-$200", icon: DollarSign, color: "text-yellow-400" },
    { title: "Avg. Engagement", value: "4.2%", change: "+0.3%", icon: Eye, color: "text-purple-400" },
  ]

  const creators = [
    {
      id: 1,
      name: "Sarah Johnson",
      handle: "@sarahstyle",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "Instagram",
      followers: "25.4K",
      engagement: "4.8%",
      location: "San Francisco, CA",
      price: "$150",
      category: "Fashion",
      rating: 4.9,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Marcus Chen",
      handle: "@marcuseats",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "TikTok",
      followers: "52.1K",
      engagement: "6.2%",
      location: "San Francisco, CA",
      price: "$200",
      category: "Food",
      rating: 4.7,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Emma Davis",
      handle: "@emmafit",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "YouTube",
      followers: "18.9K",
      engagement: "7.1%",
      location: "San Francisco, CA",
      price: "$120",
      category: "Fitness",
      rating: 4.8,
      lastActive: "3 hours ago",
    },
  ]

  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "active",
      creators: 5,
      budget: "$750",
      reach: "125K",
      engagement: "4.2%",
      deadline: "2024-02-15",
      platform: "Instagram",
    },
    {
      id: 2,
      name: "New Menu Promotion",
      status: "draft",
      creators: 0,
      budget: "$400",
      reach: "0",
      engagement: "0%",
      deadline: "2024-02-20",
      platform: "TikTok",
    },
    {
      id: 3,
      name: "Brand Awareness Campaign",
      status: "completed",
      creators: 8,
      budget: "$1,200",
      reach: "280K",
      engagement: "5.1%",
      deadline: "2024-01-30",
      platform: "Multi-platform",
    },
  ]

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
              <div className="h-10 w-10 rounded-xl bg-[#8ef0a7] flex items-center justify-center">
                <span className="text-black font-bold">AB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Business Dashboard</h1>
                <p className="text-white/60 text-sm">Welcome back, Acme Corp</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
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

        <Tabs defaultValue="discover" className="space-y-8">
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger
              value="discover"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Discover Creators
            </TabsTrigger>
            <TabsTrigger
              value="campaigns"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              My Campaigns
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Messages
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            {/* Search and Filters */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Input
                      placeholder="Search creators by name, handle, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white min-w-[140px]">
                        <SelectValue placeholder="Platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white min-w-[140px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="tech">Tech</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Creators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creators.map((creator) => (
                <Card
                  key={creator.id}
                  className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                          <AvatarFallback>
                            {creator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-white">{creator.name}</h3>
                          <p className="text-white/60 text-sm">{creator.handle}</p>
                        </div>
                      </div>
                      <Badge className="bg-[#8ef0a7]/20 text-[#8ef0a7] border-[#8ef0a7]/30">{creator.platform}</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Followers</span>
                        <span className="text-white font-medium">{creator.followers}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Engagement</span>
                        <span className="text-white font-medium">{creator.engagement}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Location</span>
                        <span className="text-white font-medium flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {creator.location.split(",")[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Starting Price</span>
                        <span className="text-[#8ef0a7] font-semibold">{creator.price}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-sm">{creator.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">My Campaigns</h2>
              <Button className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{campaign.name}</CardTitle>
                      <Badge
                        className={
                          campaign.status === "active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : campaign.status === "draft"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/60">Creators</span>
                        <p className="text-white font-medium">{campaign.creators}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Budget</span>
                        <p className="text-white font-medium">{campaign.budget}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Reach</span>
                        <p className="text-white font-medium">{campaign.reach}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Engagement</span>
                        <p className="text-white font-medium">{campaign.engagement}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {new Date(campaign.deadline).toLocaleDateString()}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Recent Messages</CardTitle>
                <CardDescription className="text-white/60">
                  Conversations with creators and campaign updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-12 text-white/60">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No messages yet</p>
                  <p className="text-sm">Start a conversation with a creator to see messages here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  Campaign Analytics
                </CardTitle>
                <CardDescription className="text-white/60">
                  Performance metrics and insights for your campaigns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-12 text-white/60">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Analytics coming soon</p>
                  <p className="text-sm">Detailed performance metrics will be available here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
