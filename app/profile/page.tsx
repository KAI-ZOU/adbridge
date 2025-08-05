"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Calendar, MapPin, Globe, Edit, Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    location: "",
    website: "",
    role: "",
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    } else if (session) {
      setProfileData({
        name: session.user?.name || "",
        email: session.user?.email || "",
        bio: "",
        location: "",
        website: "",
        role: session.user?.role || "",
      })
    }
  }, [status, session, router])

  const handleSave = () => {
    // Here you would typically save the data to your database
    console.log("Saving profile data:", profileData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      bio: "",
      location: "",
      website: "",
      role: session?.user?.role || "",
    })
    setIsEditing(false)
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
            <p className="text-white/70">Manage your account information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                    <AvatarFallback className="bg-[#8ef0a7] text-black text-2xl">
                      {session.user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white mb-2">{profileData.name}</h3>
                  <p className="text-white/70 mb-4">{profileData.email}</p>
                  {profileData.role && (
                    <Badge className="bg-[#8ef0a7]/20 text-[#8ef0a7] border-[#8ef0a7]/30 mb-4">
                      {profileData.role === "business" ? "Business" : "Creator"}
                    </Badge>
                  )}
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {new Date().toLocaleDateString()}</span>
                    </div>
                    {profileData.location && (
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.website && (
                      <div className="flex items-center justify-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>{profileData.website}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Account Information</CardTitle>
                      <CardDescription className="text-white/70">
                        Update your personal information and preferences
                      </CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          onClick={handleCancel}
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                        <Button onClick={handleSave} className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        value={profileData.email}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        disabled
                      />
                      <p className="text-xs text-white/50 mt-1">Email cannot be changed</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-white">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="City, State/Country"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-white">
                        Website
                      </Label>
                      <Input
                        id="website"
                        value={profileData.website}
                        onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="https://yourwebsite.com"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-white">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Tell us about yourself..."
                      rows={4}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl mt-6">
                <CardHeader>
                  <CardTitle className="text-white">Account Actions</CardTitle>
                  <CardDescription className="text-white/70">
                    Manage your account settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <h4 className="text-white font-medium">Account Type</h4>
                      <p className="text-white/60 text-sm">
                        {profileData.role === "business"
                          ? "Business Account"
                          : profileData.role === "creator"
                            ? "Creator Account"
                            : "Not Set"}
                      </p>
                    </div>
                    {!profileData.role && (
                      <Button
                        onClick={() => router.push("/dashboard")}
                        className="bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                      >
                        Complete Setup
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <h4 className="text-white font-medium">Dashboard</h4>
                      <p className="text-white/60 text-sm">Access your main dashboard</p>
                    </div>
                    <Button
                      onClick={() =>
                        router.push(profileData.role === "business" ? "/business/dashboard" : "/creator/dashboard")
                      }
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      disabled={!profileData.role}
                    >
                      Go to Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
