"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Check, Star, Zap, Crown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function PricingPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState<string | null>(null)

  const plans = [
    {
      name: "Starter",
      price: 29,
      priceId: "price_starter_monthly", // Replace with actual Stripe price ID
      description: "Perfect for small businesses getting started",
      icon: Star,
      features: [
        "Up to 5 campaigns per month",
        "Basic creator matching",
        "Email support",
        "Campaign analytics",
        "Standard payment processing",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: 79,
      priceId: "price_professional_monthly", // Replace with actual Stripe price ID
      description: "Ideal for growing businesses",
      icon: Zap,
      features: [
        "Up to 20 campaigns per month",
        "Advanced creator matching",
        "Priority support",
        "Advanced analytics",
        "Custom campaign templates",
        "Bulk messaging",
        "Performance tracking",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 199,
      priceId: "price_enterprise_monthly", // Replace with actual Stripe price ID
      description: "For large businesses and agencies",
      icon: Crown,
      features: [
        "Unlimited campaigns",
        "AI-powered creator matching",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "Account manager",
        "Custom contracts",
      ],
      popular: false,
    },
  ]

  const handleSubscribe = async (priceId: string, planName: string) => {
    if (!session) {
      router.push("/login")
      return
    }

    setLoading(priceId)

    try {
      const response = await fetch("/api/stripe/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.message || "Failed to create subscription",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Subscription error:", error)
      toast({
        title: "Error",
        description: "An error occurred while creating the subscription",
        variant: "destructive",
      })
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-[#8ef0a7]">Perfect Plan</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Scale your influencer marketing with our flexible pricing plans designed for businesses of all sizes
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all ${
                  plan.popular ? "ring-2 ring-[#8ef0a7] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#8ef0a7] text-black">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-[#8ef0a7]" />
                  </div>
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-white/70">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/70">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-[#8ef0a7] flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSubscribe(plan.priceId, plan.name)}
                    disabled={loading === plan.priceId}
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#8ef0a7] hover:bg-[#7de096] text-black"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                  >
                    {loading === plan.priceId ? "Processing..." : `Get Started with ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Can I change my plan anytime?</h3>
                <p className="text-white/70 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-white/70 text-sm">
                  We offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-white/70 text-sm">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-white/70 text-sm">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-white/70 text-sm">
                  No setup fees for Starter and Professional plans. Enterprise plans may include a one-time setup fee.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-white/70 text-sm">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of
                  your billing period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
