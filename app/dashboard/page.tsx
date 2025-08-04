"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Users, Briefcase, TrendingUp, MessageSquare, ArrowRight, Sparkles, Target, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/navbar"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [userRole, setUserRole] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8ef0a7]"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  // Check if user needs to complete onboarding
  if (!userRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navbar />

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                <AvatarFallback className="bg-[#8ef0a7] text-black text-2xl">
                  {session.user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome to AdBridge, {session.user?.name?.split(" ")[0]}!
              </h1>
              <p className="text-white/70 text-lg">Let's get you set up. Choose how you'd like to use AdBridge:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Business Option */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <Briefcase className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">I'm a Business</h3>
                  <p className="text-white/70 mb-6">
                    Find and collaborate with content creators to promote your products and services.
                  </p>
                  <ul className="text-left space-y-2 mb-8 text-white/80">
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-[#8ef0a7]" />
                      Find creators in your niche
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#8ef0a7]" />
                      Launch marketing campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#8ef0a7]" />
                      Direct creator communication
                    </li>
                  </ul>
                  <Link href="/business/signup">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      Continue as Business
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Creator Option */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-[#8ef0a7]/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8ef0a7]/30 transition-colors">
                    <Sparkles className="h-8 w-8 text-[#8ef0a7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">I'm a Creator</h3>
                  <p className="text-white/70 mb-6">
                    Monetize your content and collaborate with businesses and other creators.
                  </p>
                  <ul className="text-left space-y-2 mb-8 text-white/80">
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#8ef0a7]" />
                      Get paid for collaborations
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#8ef0a7]" />
                      Connect with other creators
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#8ef0a7]" />
                      Grow your audience
                    </li>
                  </ul>
                  <Link href="/creator/signup">
                    <Button className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                      Continue as Creator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <p className="text-white/60 text-sm">You can always change this later in your profile settings</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If user has a role, redirect to appropriate dashboard
  if (userRole === "business") {
    router.push("/business/dashboard")
    return null
  } else if (userRole === "creator") {
    router.push("/creator/dashboard")
    return null
  }

  return null
}
