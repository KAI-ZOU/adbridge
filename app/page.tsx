"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Users, Zap, Target, TrendingUp, Shield, Star, CheckCircle } from "lucide-react"
import FAQ from "@/components/faq"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-[#8ef0a7]/20 text-[#8ef0a7] border-[#8ef0a7]/30 hover:bg-[#8ef0a7]/30">
            <Zap className="w-4 h-4 mr-2" />
            Now Live - Connect with Local Creators
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Bridge the gap between{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ef0a7] to-green-400">
              brands & creators
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            AI-powered platform connecting businesses with local content creators. Get authentic promotions that drive
            real results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black text-lg px-8 py-4">
              <Link href="/business/signup">
                <Building2 className="mr-2 h-5 w-5" />
                I'm a Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/creator/signup">
                <Users className="mr-2 h-5 w-5" />
                I'm a Creator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Active Creators", value: "10K+", color: "text-blue-400" },
              { icon: Building2, label: "Businesses", value: "5K+", color: "text-green-400" },
              { icon: Zap, label: "Campaigns", value: "50K+", color: "text-purple-400" },
              { icon: TrendingUp, label: "Success Rate", value: "98%", color: "text-[#8ef0a7]" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose AdBridge?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The smartest way to connect with creators and grow your brand through authentic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "AI-Powered Matching",
                description:
                  "Our advanced algorithm matches you with creators who align perfectly with your brand values and target audience.",
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description:
                  "Escrow-protected transactions ensure safe payments for both businesses and creators. Get paid when work is completed.",
              },
              {
                icon: TrendingUp,
                title: "Performance Tracking",
                description:
                  "Real-time analytics and reporting help you measure campaign success and ROI across all platforms.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-[#8ef0a7] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description:
                  "Sign up and tell us about your business or creator profile. Our AI learns your preferences and goals.",
              },
              {
                step: "02",
                title: "Get Matched",
                description:
                  "Our algorithm finds perfect matches based on audience, content style, location, and campaign requirements.",
              },
              {
                step: "03",
                title: "Collaborate & Grow",
                description:
                  "Work together on campaigns, track performance, and build long-term partnerships that drive results.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl font-bold text-[#8ef0a7]/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-[#8ef0a7]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join thousands of businesses and creators who trust AdBridge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director, Local Cafe",
                content:
                  "AdBridge helped us find amazing local food bloggers. Our engagement increased by 300% and foot traffic doubled!",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Content Creator, 50K followers",
                content:
                  "The platform makes it so easy to find brands that align with my values. I've built lasting partnerships here.",
                rating: 5,
              },
              {
                name: "Emma Rodriguez",
                role: "Small Business Owner",
                content:
                  "Finally, a platform that understands small businesses. The AI matching is incredibly accurate and saves us time.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#8ef0a7]/10 to-green-400/10 rounded-3xl p-12 border border-[#8ef0a7]/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Bridge the Gap?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and creators building authentic partnerships that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black text-lg px-8 py-4">
                <Link href="/get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                <Link href="/creator-marketplace">
                  Browse Creators
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
