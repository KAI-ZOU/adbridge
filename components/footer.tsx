import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#8ef0a7] flex items-center justify-center">
                <span className="text-black font-bold text-sm">AB</span>
              </div>
              <span className="text-xl font-bold text-white">AdBridge</span>
            </Link>
            <p className="text-white/60 text-sm">
              Connecting businesses with local content creators for authentic promotions that drive real results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Platform</h3>
            <div className="space-y-2">
              <Link href="/features-pricing" className="block text-white/60 hover:text-white transition-colors text-sm">
                Features & Pricing
              </Link>
              <Link
                href="/creator-marketplace"
                className="block text-white/60 hover:text-white transition-colors text-sm"
              >
                Creator Marketplace
              </Link>
              <Link href="/business/signup" className="block text-white/60 hover:text-white transition-colors text-sm">
                For Businesses
              </Link>
              <Link href="/creator/signup" className="block text-white/60 hover:text-white transition-colors text-sm">
                For Creators
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <div className="space-y-2">
              <Link href="/resources" className="block text-white/60 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-white/60 hover:text-white transition-colors text-sm">
                Help Center
              </Link>
              <Link href="/contact" className="block text-white/60 hover:text-white transition-colors text-sm">
                Contact Support
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                API Documentation
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                GDPR
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2024 AdBridge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
