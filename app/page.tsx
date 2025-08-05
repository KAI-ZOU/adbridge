"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Building2, Users, Zap, Target, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FAQ from "@/components/faq"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const rate = scrolled * -0.5
        heroRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { icon: Users, label: "Active Creators", value: "10K+" },
    { icon: Building2, label: "Businesses", value: "5K+" },
    { icon: Zap, label: "Campaigns", value: "50K+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ]

  const features = [
    {
      icon: Target,
      title: "AI-Powered Matching",
      description:
        "Our intelligent algorithm connects you with creators who perfectly align with your brand and target audience.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with escrow services ensure safe payments for both businesses and creators.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Track campaign performance with detailed analytics and insights to optimize your marketing strategy.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Local Cafe Chain",
      content:
        "AdBridge helped us connect with food bloggers in our area. Our foot traffic increased by 40% after the campaigns!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      company: "@mikeeats",
      content:
        "I've found amazing local businesses to partner with through AdBridge. The platform makes collaboration so easy.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      company: "Boutique Fashion",
      content:
        "Working with micro-influencers through AdBridge gave us authentic promotion that actually converted to sales.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div ref={heroRef} className="container px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#8ef0a7]/20 text-[#8ef0a7] px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            Now Live - Connect with Local Creators
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bridge the gap between
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ef0a7] to-emerald-400 block">
              brands & creators
            </span>
          </h1>

          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered platform connecting businesses with local content creators. Get authentic promotions that drive
            real results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/business/signup">
              <Button
                size="lg"
                className="bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold px-8 py-4 rounded-xl text-lg"
              >
                <Building2 className="mr-2 h-5 w-5" />
                I'm a Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/creator/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 rounded-xl text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Creator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#8ef0a7]" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#8ef0a7]" />
              <span>AI matching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#8ef0a7]" />
              <span>Local focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-[#8ef0a7]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AdBridge?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to create successful creator partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-[#8ef0a7]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real stories from businesses and creators who've found success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
                <CardContent className="p-8">
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#8ef0a7]/20 flex items-center justify-center">
                      <span className="text-[#8ef0a7] font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-[#8ef0a7] text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4">
          <Card className="bg-gradient-to-r from-[#8ef0a7]/20 to-emerald-400/20 backdrop-blur-sm border-[#8ef0a7]/30 rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses and creators who are already growing together on AdBridge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/business/signup">
                  <Button size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold rounded-xl">
                    Start as Business
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/creator/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-xl bg-transparent"
                  >
                    Join as Creator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
