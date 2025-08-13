"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Search, Filter, Star, MapPin, Users, MessageCircle, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

interface Creator {
  id: string
  name: string
  handle: string
  bio: string
  location: string
  categories: string[]
  platforms: { platform: string; handle: string; followers: string }[]
  contentTypes: string[]
  rates: {
    shoutout: number
    story: number
    retweet: number
    collab: number
  }
  rating: number
  completedCampaigns: number
  totalEarnings: number
  image: string
}

export default function CreatorMarketplacePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [creators, setCreators] = useState<Creator[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

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

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn", "Facebook"]

  useEffect(() => {
    fetchCreators()
  }, [searchTerm, selectedCategory, selectedPlatform, currentPage])

  const fetchCreators = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "12",
      })

      if (searchTerm) params.append("search", searchTerm)
      if (selectedCategory !== "all") params.append("category", selectedCategory)
      if (selectedPlatform !== "all") params.append("platform", selectedPlatform)

      const response = await fetch(`/api/creators?${params}`)
      if (response.ok) {
        const data = await response.json()
        setCreators(data.creators)
        setTotalPages(data.pagination.pages)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch creators",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Fetch creators error:", error)
      toast({
        title: "Error",
        description: "An error occurred while fetching creators",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleOrderService = async (creatorId: string, serviceType: string, amount: number, platform: string) => {
    if (!session) {
      router.push("/login")
      return
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorId,
          serviceType,
          amount,
          platform,
          requirements: "", // You can add a modal for requirements later
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Redirect to payment or order confirmation
        toast({
          title: "Success!",
          description: "Order created successfully. Redirecting to payment...",
        })
        // You can integrate Stripe payment here
        router.push(`/orders/${data.orderId}`)
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.message || "Failed to create order",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Order creation error:", error)
      toast({
        title: "Error",
        description: "An error occurred while creating the order",
        variant: "destructive",
      })
    }
  }

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Creator Marketplace</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover and collaborate with talented creators across all platforms
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                placeholder="Search creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/20">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/20">
                <SelectItem value="all">All Platforms</SelectItem>
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedPlatform("all")
                setCurrentPage(1)
              }}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Creators Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-32 bg-white/20 rounded mb-4" />
                  <div className="h-4 bg-white/20 rounded mb-2" />
                  <div className="h-3 bg-white/20 rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : creators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">No creators found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={creator.image || "/placeholder.svg"} alt={creator.name} />
                      <AvatarFallback className="bg-[#8ef0a7] text-black">{creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-white text-lg truncate">{creator.name}</CardTitle>
                      <p className="text-white/70 text-sm truncate">{creator.handle}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-white/80 text-sm line-clamp-2">{creator.bio}</p>

                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{creator.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white">{creator.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <Users className="h-3 w-3" />
                      <span>{creator.completedCampaigns} campaigns</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {creator.categories.slice(0, 2).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs bg-white/20 text-white">
                        {category}
                      </Badge>
                    ))}
                    {creator.categories.length > 2 && (
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                        +{creator.categories.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Shoutout</span>
                      <span className="text-white font-medium">${creator.rates.shoutout}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Story</span>
                      <span className="text-white font-medium">${creator.rates.story}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleOrderService(creator.id, "shoutout", creator.rates.shoutout, "Instagram")}
                      className="flex-1 bg-[#8ef0a7] hover:bg-[#7de096] text-black text-sm"
                    >
                      Order Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Previous
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1
              return (
                <Button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  className={
                    currentPage === page
                      ? "bg-[#8ef0a7] text-black"
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }
                >
                  {page}
                </Button>
              )
            })}

            <Button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
