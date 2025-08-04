import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-[#8ef0a7] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">AB</span>
                </div>
                <span className="text-xl font-bold text-white">AdBridge</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Connecting businesses with local content creators through AI-powered matching.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features-pricing" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Features & Pricing
                </Link>
              </li>
              <li>
                <Link href="/business/signup" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/creator/signup" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  For Creators
                </Link>
              </li>
              <li>
                <Link href="/features-pricing" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:help@adbridge.com" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <Link href="/features-pricing" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#8ef0a7] transition-colors">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} AdBridge. All rights reserved. Built with ❤️ for the creator economy.</p>
        </div>
      </div>
    </footer>
  )
}
