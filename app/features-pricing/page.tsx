"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Check,
  X,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  MessageSquare,
  Building2,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"

export default function FeaturesPricingPage() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.3
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

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="container px-4 md:px-6 pt-20 pb-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Everything you need to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ef0a7] to-emerald-400 block">
                  connect & create
                </span>
              </h1>
              <p className="max-w-3xl text-xl text-white/70 leading-relaxed">
                Discover our powerful features and transparent pricing designed to help businesses and creators build
                successful partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 md:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features for Everyone</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Whether you're a business or creator, our platform has everything you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Business Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[#8ef0a7]" />
                  </div>
                  <CardTitle className="text-2xl text-white">For Businesses</CardTitle>
                </div>
                <CardDescription className="text-white/70">
                  Comprehensive tools to manage campaigns and track performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "AI Creator Matching",
                    description: "Find creators that align with your brand and target audience",
                  },
                  {
                    icon: BarChart3,
                    title: "Campaign Analytics",
                    description: "Track reach, engagement, and ROI across all campaigns",
                  },
                  {
                    icon: MessageSquare,
                    title: "Direct Messaging",
                    description: "Communicate with creators through our secure platform",
                  },
                  {
                    icon: Shield,
                    title: "Secure Payments",
                    description: "Built-in escrow system protects your investment",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-[#8ef0a7]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-4 w-4 text-[#8ef0a7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Creator Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">For Creators</CardTitle>
                </div>
                <CardDescription className="text-white/70">
                  Everything you need to monetize your content and grow your brand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Star,
                    title: "Profile Showcase",
                    description: "Build a compelling profile with portfolio samples",
                  },
                  {
                    icon: Zap,
                    title: "Smart Opportunities",
                    description: "Get matched with brands that fit your content style",
                  },
                  {
                    icon: BarChart3,
                    title: "Earnings Dashboard",
                    description: "Track your income and campaign performance",
                  },
                  {
                    icon: Shield,
                    title: "Payment Protection",
                    description: "Get paid on time with our secure payment system",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container px-4 md:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How AdBridge Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our streamlined process makes it easy to connect, collaborate, and create amazing content together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Create Your Profile",
                  description: "Businesses describe their brand and goals. Creators showcase their style and audience.",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Get Matched",
                  description:
                    "Our AI algorithm finds perfect partnerships based on location, audience, and content type.",
                  icon: Zap,
                },
                {
                  step: "3",
                  title: "Collaborate & Grow",
                  description: "Work together to create authentic content that drives results for both parties.",
                  icon: Star,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-[#8ef0a7] flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-[#8ef0a7]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container px-4 md:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Choose the plan that works for you. No hidden fees, no long-term contracts.
            </p>
          </div>

          <Tabs defaultValue="business" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/10 backdrop-blur-sm border-white/20">
                <TabsTrigger
                  value="business"
                  className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
                >
                  For Businesses
                </TabsTrigger>
                <TabsTrigger
                  value="creator"
                  className="text-white data-[state=active]:bg-[#8ef0a7] data-[state=active]:text-black"
                >
                  For Creators
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="business">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Starter",
                    price: "Free",
                    description: "Perfect for small businesses getting started",
                    features: [
                      "Up to 3 active campaigns",
                      "Basic creator discovery",
                      "Standard messaging",
                      "Basic analytics",
                      "Email support",
                    ],
                    limitations: ["Advanced filtering", "Priority support", "Custom branding"],
                    popular: false,
                  },
                  {
                    name: "Professional",
                    price: "$49/month",
                    description: "Ideal for growing businesses",
                    features: [
                      "Unlimited campaigns",
                      "Advanced creator matching",
                      "Priority messaging",
                      "Detailed analytics",
                      "Phone & email support",
                      "Campaign templates",
                      "Team collaboration",
                    ],
                    limitations: ["Custom integrations"],
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "For large organizations",
                    features: [
                      "Everything in Professional",
                      "Custom integrations",
                      "Dedicated account manager",
                      "Custom analytics",
                      "API access",
                      "White-label options",
                      "SLA guarantee",
                    ],
                    limitations: [],
                    popular: false,
                  },
                ].map((plan, index) => (
                  <Card
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl relative ${plan.popular ? "border-[#8ef0a7] shadow-lg scale-105" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#8ef0a7] text-black">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-white mt-2">{plan.price}</div>
                      <CardDescription className="text-white/70">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-[#8ef0a7] flex-shrink-0" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <X className="h-4 w-4 text-white/40 flex-shrink-0" />
                            <span className="text-white/40 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-6 ${plan.popular ? "bg-[#8ef0a7] hover:bg-[#7de096] text-black" : "bg-white/10 hover:bg-white/20 text-white border border-white/20"}`}
                        asChild
                      >
                        <Link href={plan.name === "Enterprise" ? "/contact" : "/business/signup"}>
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="creator">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl max-w-2xl mx-auto">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white">Creator Account</CardTitle>
                  <div className="text-4xl font-bold text-white mt-2">Always Free</div>
                  <CardDescription className="text-white/70">
                    No subscription fees - you only pay a small commission when you earn
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-4 bg-[#8ef0a7]/10 rounded-xl border border-[#8ef0a7]/20">
                    <div className="text-2xl font-bold text-[#8ef0a7]">5% Commission</div>
                    <p className="text-white/70 text-sm mt-1">Only charged when you complete paid collaborations</p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Unlimited profile creation",
                      "Access to all business partnerships",
                      "Secure payment processing",
                      "Performance analytics",
                      "Direct messaging with brands",
                      "Portfolio showcase tools",
                      "Mobile app access",
                      "Community support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-[#8ef0a7] flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black" asChild>
                    <Link href="/creator/signup">Join as Creator</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="container px-4 md:px-6 py-20">
          <Card className="bg-gradient-to-r from-[#8ef0a7]/20 to-emerald-400/20 backdrop-blur-sm border-[#8ef0a7]/30 rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses and creators building successful partnerships on AdBridge.
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
                    <Users className="ml-2 h-5 w-5" />
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
