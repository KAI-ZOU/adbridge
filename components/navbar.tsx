"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, User, LogOut, Settings, ChevronDown } from "lucide-react"

interface UserAccount {
  email: string
  name: string
  image?: string
  accountType: "business" | "creator" | null
  profileCompleted: boolean
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [userAccount, setUserAccount] = useState<UserAccount | null>(null)
  const { data: session, status } = useSession()

  const navigation = [
    { name: "Features & Pricing", href: "/features-pricing" },
    { name: "Creator Marketplace", href: "/creator-marketplace" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  // Fetch user account information
  useEffect(() => {
    if (session?.user?.email) {
      fetch("/api/user/account")
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setUserAccount(data)
          }
        })
        .catch((error) => console.error("Error fetching user account:", error))
    }
  }, [session])

  // Determine dashboard URL based on account type
  const getDashboardUrl = () => {
    if (!userAccount) return "/dashboard"

    if (userAccount.accountType === "business" && userAccount.profileCompleted) {
      return "/business/dashboard"
    } else if (userAccount.accountType === "creator" && userAccount.profileCompleted) {
      return "/creator/dashboard"
    } else {
      return "/dashboard" // Role selection page
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-[#8ef0a7] flex items-center justify-center">
            <span className="text-black font-bold text-sm">AB</span>
          </div>
          <span className="text-xl font-bold text-white">AdBridge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {status === "loading" ? (
            <div className="h-8 w-20 bg-white/10 rounded animate-pulse" />
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                    <AvatarFallback className="bg-[#8ef0a7] text-black text-sm">
                      {session.user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{session.user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-white/20">
                <DropdownMenuItem asChild>
                  <Link href={getDashboardUrl()} className="flex items-center gap-2 text-white">
                    <User className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2 text-white">
                    <Settings className="h-4 w-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2 text-white">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Sign Up
                </Button>
              </Link>
              <Link href="/get-started">
                <Button className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm">
          <div className="container px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
                {session ? (
                  <>
                    <Link href={getDashboardUrl()} onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                        Dashboard
                      </Button>
                    </Link>
                    <Button variant="ghost" onClick={() => signOut()} className="w-full text-white hover:bg-white/10">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link href="/get-started" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
