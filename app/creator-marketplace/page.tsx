"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  MessageSquare,
  Instagram,
  Twitter,
  Youtube,
  Repeat2,
  Zap,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"

export default function CreatorMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const promoTypes = [
    {
      id: "shoutout",
      name: "Shoutouts",
      icon: Sparkles,
      description: "Get featured in posts",
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
    },
    {
      id: "retweet",
      name: "Retweets",
      icon: Repeat2,
      description: "Amplify your content",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      id: "story",
      name: "Story Mentions",
      icon: Instagram,
      description: "24hr story features",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      id: "collab",
      name: "Collaborations",
      icon: Users,
      description: "Joint content creation",
      color: "text-[#8ef0a7]",
      bgColor: "bg-[#8ef0a7]/20",
    },
  ]

  const creators = [
    {
      id: 1,
      name: "Alex Chen",
      handle: "@alexcreates",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      followers: "45.2K",
      engagement: "6.8%",
      niche: "Tech Reviews",
      platforms: ["youtube", "twitter", "instagram"],
      rating: 4.9,
      responseTime: "2 hours",
      location: "San Francisco, CA",
      services: [
        { type: "shoutout", price: 25, platform: "twitter", description: "Tweet about your content" },
        { type: "story", price: 35, platform: "instagram", description: "24hr story mention" },
        { type: "collab", price: 150, platform: "youtube", description: "Joint video review" },
      ],
      recentWork: "Featured 12 creators this month",
      tags: ["Tech", "Reviews", "Gadgets"],
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      handle: "@mayastyle",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      followers: "28.7K",
      engagement: "8.2%",
      niche: "Fashion & Lifestyle",
      platforms: ["instagram", "tiktok"],
      rating: 4.8,
      responseTime: "1 hour",
      location: "Los Angeles, CA",
      services: [
        { type: "shoutout", price: 30, platform: "instagram", description: "Post featuring your brand" },
        { type: "story", price: 20, platform: "instagram", description: "Story mention with swipe-up" },
        { type: "retweet", price: 15, platform: "twitter", description: "Retweet with comment" },
      ],
      recentWork: "98% positive feedback",
      tags: ["Fashion", "Lifestyle", "Beauty"],
    },
    {
      id: 3,
      name: "Jordan Kim",
      handle: "@jordanfitness",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: false,
      followers: "18.3K",
      engagement: "9.1%",
      niche: "Fitness & Wellness",
      platforms: ["instagram", "youtube", "tiktok"],
      rating: 4.7,
      responseTime: "4 hours",
      location: "Austin, TX",
      services: [
        { type: "shoutout", price: 20, platform: "instagram", description: "Workout post feature" },
        { type: "collab", price: 100, platform: "youtube", description: "Joint workout video" },
        { type: "story", price: 25, platform: "instagram", description: "Fitness story mention" },
      ],
      recentWork: "Helped 8 creators grow this month",
      tags: ["Fitness", "Health", "Motivation"],
    },
    {
      id: 4,
      name: "Sam Taylor",
      handle: "@samcooks",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      followers: "52.1K",
      engagement: "7.4%",
      niche: "Food & Cooking",
      platforms: ["tiktok", "instagram", "youtube"],
      rating: 4.9,
      responseTime: "30 minutes",
      location: "New York, NY",
      services: [
        { type: "shoutout", price: 40, platform: "tiktok", description: "Recipe video mention" },
        { type: "story", price: 30, platform: "instagram", description: "Cooking story feature" },
        { type: "collab", price: 200, platform: "youtube", description: "Cooking collaboration" },
      ],
      recentWork: "Top-rated creator this month",
      tags: ["Food", "Cooking", "Recipes"],
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return Instagram
      case "twitter":
        return Twitter
      case "youtube":
        return Youtube
      case "tiktok":
        return MessageSquare
      default:
        return MessageSquare
    }
  }

  const getServiceIcon = (type: string) => {
    const service = promoTypes.find((p) => p.id === type)
    return service?.icon || Sparkles
  }

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" || creator.tags.some((tag) => tag.toLowerCase().includes(selectedCategory))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navbar />

      <div className="container px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#8ef0a7]/20 text-[#8ef0a7] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Creator-to-Creator Marketplace
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Grow Together with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ef0a7] to-emerald-400 block">
              Fellow Creators
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Buy shoutouts, retweets, story mentions, and collaborations from other creators. Support each other and grow
            your audience together.
          </p>
        </div>

        {/* Promo Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {promoTypes.map((type) => (
            <Card
              key={type.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(type.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`h-12 w-12 rounded-xl ${type.bgColor} flex items-center justify-center mx-auto mb-3`}>
                  <type.icon className={`h-6 w-6 ${type.color}`} />
                </div>
                <h3 className="font-semibold text-white mb-1">{type.name}</h3>
                <p className="text-white/60 text-sm">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                <Input
                  placeholder="Search creators by name, niche, or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#8ef0a7]"
                />
              </div>
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white min-w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white min-w-[140px]">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
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
        <div className="space-y-6">
          {filteredCreators.map((creator) => (
            <Card
              key={creator.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Creator Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                        <AvatarFallback className="bg-[#8ef0a7] text-black text-lg">
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                          {creator.verified && (
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">✓</Badge>
                          )}
                        </div>
                        <p className="text-white/70 mb-2">{creator.handle}</p>
                        <p className="text-white/60 text-sm mb-3">{creator.niche}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {creator.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-white/30 text-white/80 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-white/60">Followers</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {creator.followers}
                            </p>
                          </div>
                          <div>
                            <span className="text-white/60">Engagement</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              {creator.engagement}
                            </p>
                          </div>
                          <div>
                            <span className="text-white/60">Rating</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {creator.rating}
                            </p>
                          </div>
                          <div>
                            <span className="text-white/60">Response</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {creator.responseTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1 text-white/60 text-sm">
                            <MapPin className="h-3 w-3" />
                            {creator.location}
                          </div>
                          <div className="flex gap-2">
                            {creator.platforms.map((platform) => {
                              const Icon = getPlatformIcon(platform)
                              return (
                                <div
                                  key={platform}
                                  className="h-6 w-6 rounded bg-white/10 flex items-center justify-center"
                                >
                                  <Icon className="h-3 w-3 text-white/70" />
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="lg:w-80">
                    <h4 className="text-white font-semibold mb-3">Available Services</h4>
                    <div className="space-y-3">
                      {creator.services.map((service, index) => {
                        const ServiceIcon = getServiceIcon(service.type)
                        const PlatformIcon = getPlatformIcon(service.platform)
                        return (
                          <div
                            key={index}
                            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <ServiceIcon className="h-4 w-4 text-[#8ef0a7]" />
                                <span className="text-white font-medium capitalize">{service.type}</span>
                                <PlatformIcon className="h-3 w-3 text-white/60" />
                              </div>
                              <div className="flex items-center gap-1 text-[#8ef0a7] font-bold">
                                <DollarSign className="h-4 w-4" />
                                {service.price}
                              </div>
                            </div>
                            <p className="text-white/70 text-sm mb-3">{service.description}</p>
                            <Button size="sm" className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                              Order Now
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-4 p-3 bg-[#8ef0a7]/10 rounded-xl border border-[#8ef0a7]/20">
                      <p className="text-[#8ef0a7] text-sm font-medium">{creator.recentWork}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Load More Creators
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-[#8ef0a7]/20 to-emerald-400/20 backdrop-blur-sm border-[#8ef0a7]/30 rounded-3xl overflow-hidden mt-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to Offer Your Services?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our creator marketplace and start earning by helping other creators grow their audience.
            </p>
            <Link href="/creator/signup">
              <Button size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold rounded-xl">
                Become a Service Provider
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
