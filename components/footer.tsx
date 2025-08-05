"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#8ef0a7] flex items-center justify-center">
                <span className="text-black font-bold text-sm">AB</span>
              </div>
              <span className="text-white font-bold text-xl">AdBridge</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Connecting businesses with local content creators for authentic promotions that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-[#8ef0a7] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#8ef0a7] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#8ef0a7] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#8ef0a7] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features-pricing" className="text-white/70 hover:text-white transition-colors">
                  Features & Pricing
                </Link>
              </li>
              <li>
                <Link href="/creator-marketplace" className="text-white/70 hover:text-white transition-colors">
                  Creator Marketplace
                </Link>
              </li>
              <li>
                <Link href="/business/signup" className="text-white/70 hover:text-white transition-colors">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/creator/signup" className="text-white/70 hover:text-white transition-colors">
                  For Creators
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/70 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">© 2024 AdBridge. All rights reserved.</p>
            <p className="text-white/70 text-sm mt-4 md:mt-0">Made with ❤️ for creators and businesses</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
