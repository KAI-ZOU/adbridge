"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Search,
  Filter,
  Star,
  Users,
  MessageSquare,
  Instagram,
  Twitter,
  Youtube,
  Repeat2,
  ArrowRight,
  MapPin,
  DollarSign,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface Creator {
  _id: string
  creatorName: string
  handle: string
  bio: string
  location: string
  categories: string[]
  platforms: {
    platform: string
    handle: string
    followers: string
  }[]
  rates: {
    shoutout: number
    story: number
    retweet: number
    collab: number
  }
  rating: number
  totalEarnings: number
  completedCampaigns: number
}

export default function CreatorMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [creators, setCreators] = useState<Creator[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [orderRequirements, setOrderRequirements] = useState("")
  const [isOrdering, setIsOrdering] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchCreators()
  }, [])

  const fetchCreators = async () => {
    try {
      const response = await fetch("/api/creators")
      if (response.ok) {
        const data = await response.json()
        setCreators(data)
      }
    } catch (error) {
      console.error("Error fetching creators:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleOrder = async (service: any, creator: Creator) => {
    setSelectedService({ ...service, creator })
    setOrderRequirements("")
  }

  const submitOrder = async () => {
    if (!selectedService) return

    setIsOrdering(true)
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId: selectedService.id,
          creatorId: selectedService.creator._id,
          amount: selectedService.price,
          requirements: orderRequirements,
        }),
      })

      if (response.ok) {
        const { orderId, clientSecret } = await response.json()

        // Redirect to Stripe checkout or handle payment
        toast({
          title: "Order Created!",
          description: "Redirecting to payment...",
        })

        // Here you would integrate with Stripe Elements or redirect to checkout
        window.location.href = `/checkout?orderId=${orderId}&clientSecret=${clientSecret}`
      } else {
        throw new Error("Failed to create order")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create order. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsOrdering(false)
      setSelectedService(null)
    }
  }

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

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
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
      creator.creatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" ||
      creator.categories.some((cat) => cat.toLowerCase().includes(selectedCategory.toLowerCase()))

    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8ef0a7]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
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
                  <SelectContent className="bg-white border-gray-300">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
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
              key={creator._id}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Creator Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg" alt={creator.creatorName} />
                        <AvatarFallback className="bg-[#8ef0a7] text-black text-lg">
                          {creator.creatorName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{creator.creatorName}</h3>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">✓</Badge>
                        </div>
                        <p className="text-white/70 mb-2">{creator.handle}</p>
                        <p className="text-white/60 text-sm mb-3">{creator.bio}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {creator.categories.map((category) => (
                            <Badge key={category} variant="outline" className="border-white/30 text-white/80 text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-white/60">Followers</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {creator.platforms[0]?.followers || "N/A"}
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
                            <span className="text-white/60">Completed</span>
                            <p className="text-white font-medium">{creator.completedCampaigns}</p>
                          </div>
                          <div>
                            <span className="text-white/60">Location</span>
                            <p className="text-white font-medium flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {creator.location.split(",")[0]}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                          {creator.platforms.map((platform) => {
                            const Icon = getPlatformIcon(platform.platform)
                            return (
                              <div
                                key={platform.platform}
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

                  {/* Services */}
                  <div className="lg:w-80">
                    <h4 className="text-white font-semibold mb-3">Available Services</h4>
                    <div className="space-y-3">
                      {Object.entries(creator.rates).map(([type, price]) => {
                        if (!price) return null
                        const ServiceIcon = getServiceIcon(type)
                        return (
                          <div
                            key={type}
                            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <ServiceIcon className="h-4 w-4 text-[#8ef0a7]" />
                                <span className="text-white font-medium capitalize">{type}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[#8ef0a7] font-bold">
                                <DollarSign className="h-4 w-4" />
                                {price}
                              </div>
                            </div>
                            <p className="text-white/70 text-sm mb-3">
                              {type === "shoutout" && "Get featured in a post"}
                              {type === "story" && "24-hour story mention"}
                              {type === "retweet" && "Retweet with engagement"}
                              {type === "collab" && "Joint content creation"}
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                                  onClick={() => handleOrder({ id: type, price, type }, creator)}
                                >
                                  Order Now
                                  <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                              </DialogTrigger>
                            </Dialog>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Dialog */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="bg-gray-900 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle>Order {selectedService?.type}</DialogTitle>
              <DialogDescription className="text-white/70">
                Place your order with {selectedService?.creator?.creatorName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <span>Service: {selectedService?.type}</span>
                <span className="text-[#8ef0a7] font-bold">${selectedService?.price}</span>
              </div>
              <div>
                <Label htmlFor="requirements" className="text-white">
                  Special Requirements (Optional)
                </Label>
                <Textarea
                  id="requirements"
                  value={orderRequirements}
                  onChange={(e) => setOrderRequirements(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Any specific requirements or instructions..."
                  rows={3}
                />
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => setSelectedService(null)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                  onClick={submitOrder}
                  disabled={isOrdering}
                >
                  {isOrdering ? "Processing..." : `Pay $${selectedService?.price}`}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

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
