"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Loader2 } from "lucide-react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  const handleRoleSelection = async (role: "business" | "creator") => {
    setIsLoading(true)
    // Here you would typically save the role to your database
    // For now, we'll just redirect to the appropriate signup page
    router.push(`/${role}/signup`)
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    )
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to AdBridge, {session?.user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-xl text-white/70">Choose your role to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-[#8ef0a7] flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-black" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white">I'm a Business</CardTitle>
              <CardDescription className="text-white/70">Find content creators to promote your brand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-white/80">
                <li>• Connect with local creators</li>
                <li>• AI-powered matching</li>
                <li>• Campaign management tools</li>
                <li>• Performance analytics</li>
              </ul>
              <Button
                onClick={() => handleRoleSelection("business")}
                disabled={isLoading}
                className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold py-3 rounded-xl"
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Continue as Business"}
              </Button>
            </CardContent>
          </Card>

          {/* Creator Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white">I'm a Creator</CardTitle>
              <CardDescription className="text-white/70">Monetize your content and grow your audience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-white/80">
                <li>• Find brand partnerships</li>
                <li>• Set your own rates</li>
                <li>• Portfolio showcase</li>
                <li>• Secure payments</li>
              </ul>
              <Button
                onClick={() => handleRoleSelection("creator")}
                disabled={isLoading}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl"
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Continue as Creator"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
