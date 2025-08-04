"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Users, Building2, Zap, Shield, BarChart3, MessageSquare, Star, Check, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"

export default function HomePage() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        backgroundRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div ref={backgroundRef} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="container px-4 md:px-6 pt-20 pb-32">
          <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#8ef0a7]/20 text-[#8ef0a7] border-[#8ef0a7]/30 px-4 py-2">
              🚀 Now Live - Connect with Local Creators
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                Bridge the gap between
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ef0a7] to-emerald-400 block">
                  brands & creators
                </span>
              </h1>
              <p className="max-w-2xl text-xl text-white/70 leading-relaxed">
                AI-powered platform connecting businesses with local content creators. Get authentic promotions that
                drive real results for your brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/business/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold px-8 py-6 text-lg rounded-2xl group transition-all duration-300 hover:scale-105"
                >
                  <Building2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  I'm a Business
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/creator/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl group transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  I'm a Creator
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm text-white/60 mt-8">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#8ef0a7]" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#8ef0a7]" />
                <span>AI matching</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#8ef0a7]" />
                <span>Local focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Active Creators", icon: Users },
              { number: "5K+", label: "Businesses", icon: Building2 },
              { number: "50K+", label: "Campaigns", icon: Zap },
              { number: "98%", label: "Success Rate", icon: Star },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <stat.icon className="h-8 w-8 text-[#8ef0a7] mb-2" />
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="container px-4 md:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How AdBridge Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to find the perfect match for your brand or content creation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Businesses */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[#8ef0a7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">For Businesses</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Tell us about your business and campaign goals",
                    "Our AI matches you with relevant local creators",
                    "Review creator profiles and send collaboration requests",
                    "Launch campaigns and track performance in real-time",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#8ef0a7] flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-white/80">{step}</p>
                    </div>
                  ))}
                </div>
                <Link href="/business/signup" className="inline-block mt-6">
                  <Button className="bg-[#8ef0a7] hover:bg-[#7de096] text-black rounded-xl">
                    Get Started as Business
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* For Creators */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">For Creators</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Create your profile and showcase your content style",
                    "Set your rates and content preferences",
                    "Receive collaboration requests from local businesses",
                    "Create content, get paid, and build your portfolio",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-white/80">{step}</p>
                    </div>
                  ))}
                </div>
                <Link href="/creator/signup" className="inline-block mt-6">
                  <Button
                    variant="outline"
                    className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10 rounded-xl bg-transparent"
                  >
                    Join as Creator
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 md:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AdBridge?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Built for the modern creator economy with powerful tools and intelligent matching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "AI-Powered Matching",
                description:
                  "Our smart algorithm connects brands with creators based on audience, location, and content style.",
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description: "Built-in escrow system ensures creators get paid and businesses get their content.",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Track campaign performance with detailed metrics and ROI analysis.",
              },
              {
                icon: MessageSquare,
                title: "Seamless Communication",
                description: "Built-in messaging system keeps all project communication in one place.",
              },
              {
                icon: Users,
                title: "Quality Creators",
                description: "Vetted creators with proven track records and engaged local audiences.",
              },
              {
                icon: Building2,
                title: "Local Focus",
                description: "Connect with creators in your area for authentic, location-based content.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-[#8ef0a7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container px-4 md:px-6 py-20">
          <Testimonials />
        </section>

        {/* FAQ */}
        <section className="container px-4 md:px-6 py-20">
          <FAQ />
        </section>

        {/* CTA Section */}
        <section className="container px-4 md:px-6 py-20">
          <Card className="bg-gradient-to-r from-[#8ef0a7]/20 to-emerald-400/20 backdrop-blur-sm border-[#8ef0a7]/30 rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Marketing?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses and creators who are already building authentic partnerships on AdBridge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/features-pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-xl bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
                <Link href="/business/signup">
                  <Button size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold rounded-xl">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
