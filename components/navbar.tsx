"use client"

import { useState } from "react"
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
import { Menu, X, User, LogOut, Settings } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-[#8ef0a7] flex items-center justify-center">
              <span className="text-black font-bold text-sm">AB</span>
            </div>
            <span className="text-white font-bold text-xl">AdBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features-pricing" className="text-white/80 hover:text-white transition-colors">
              Features & Pricing
            </Link>
            <Link href="/creator-marketplace" className="text-white/80 hover:text-white transition-colors">
              Creator Marketplace
            </Link>
            <Link href="/resources" className="text-white/80 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {status === "loading" ? (
              <div className="h-8 w-8 rounded-full bg-white/20 animate-pulse" />
            ) : session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback className="bg-[#8ef0a7] text-black">
                        {session.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {session.user?.name && <p className="font-medium text-white">{session.user.name}</p>}
                      {session.user?.email && (
                        <p className="w-[200px] truncate text-sm text-gray-400">{session.user.email}</p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem asChild className="text-white hover:bg-gray-800">
                    <Link href="/dashboard">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-white hover:bg-gray-800">
                    <Link href="/profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    className="text-white hover:bg-gray-800 cursor-pointer"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-[#8ef0a7] hover:bg-[#7de096] text-black">
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/features-pricing"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features & Pricing
              </Link>
              <Link
                href="/creator-marketplace"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Creator Marketplace
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-white/10 pt-4">
                {session ? (
                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: "/" })
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/get-started"
                      className="block px-3 py-2 bg-[#8ef0a7] text-black rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
