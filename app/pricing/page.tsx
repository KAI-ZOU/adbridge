"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function Pricing() {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubscribe = async (priceId: string, planName: string) => {
    setIsLoading(priceId)

    try {
      const response = await fetch("/api/stripe/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, planName }),
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      } else {
        throw new Error("Failed to create subscription")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(null)
    }
  }

  const plans = {
    monthly: [
      {
        name: "Starter",
        price: "$49",
        priceId: "price_starter_monthly",
        description: "Perfect for small businesses getting started",
        features: [
          "Up to 5 active campaigns",
          "Basic analytics dashboard",
          "Email support",
          "Standard matching algorithm",
        ],
        limitations: ["Advanced automation", "Custom reporting"],
      },
      {
        name: "Professional",
        price: "$99",
        priceId: "price_professional_monthly",
        description: "Ideal for growing businesses with active marketing",
        popular: true,
        features: [
          "Up to 20 active campaigns",
          "Advanced analytics & reporting",
          "Priority email support",
          "AI-powered optimization",
          "Campaign automation tools",
          "Custom dashboard",
        ],
        limitations: [],
      },
      {
        name: "Business",
        price: "$199",
        priceId: "price_business_monthly",
        description: "For established businesses scaling their advertising",
        features: [
          "Up to 50 active campaigns",
          "Advanced analytics & insights",
          "Phone & email support",
          "Multi-user collaboration",
          "API access",
          "White-label options",
        ],
        limitations: [],
      },
    ],
    annually: [
      {
        name: "Starter",
        price: "$39",
        priceId: "price_starter_annual",
        description: "Perfect for small businesses getting started",
        savings: "Save $120/year",
        features: [
          "Up to 5 active campaigns",
          "Basic analytics dashboard",
          "Email support",
          "Standard matching algorithm",
        ],
        limitations: ["Advanced automation", "Custom reporting"],
      },
      {
        name: "Professional",
        price: "$79",
        priceId: "price_professional_annual",
        description: "Ideal for growing businesses with active marketing",
        popular: true,
        savings: "Save $240/year",
        features: [
          "Up to 20 active campaigns",
          "Advanced analytics & reporting",
          "Priority email support",
          "AI-powered optimization",
          "Campaign automation tools",
          "Custom dashboard",
        ],
        limitations: [],
      },
      {
        name: "Business",
        price: "$159",
        priceId: "price_business_annual",
        description: "For established businesses scaling their advertising",
        savings: "Save $480/year",
        features: [
          "Up to 50 active campaigns",
          "Advanced analytics & insights",
          "Phone & email support",
          "Multi-user collaboration",
          "API access",
          "White-label options",
        ],
        limitations: [],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that's right for your business. All plans include our core features with no hidden
                  fees.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annually">
                      Annually
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Save 20%
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </div>

                {(["monthly", "annually"] as const).map((period) => (
                  <TabsContent key={period} value={period}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                      {plans[period].map((plan, index) => (
                        <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                            <div className="mt-4 text-4xl font-bold">
                              {plan.price}
                              <span className="text-sm font-normal text-muted-foreground">/month</span>
                            </div>
                            {plan.savings && <div className="text-sm text-green-600">{plan.savings}</div>}
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-3">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {plan.limitations.map((limitation) => (
                                <li key={limitation} className="flex items-center gap-2">
                                  <X className="h-4 w-4 text-red-500" />
                                  <span className="text-muted-foreground">{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              onClick={() => handleSubscribe(plan.priceId, plan.name)}
                              disabled={isLoading === plan.priceId}
                            >
                              {isLoading === plan.priceId ? "Processing..." : "Start Free Trial"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing FAQ</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Common questions about our pricing and plans.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                    prorate the billing accordingly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The 14-day free trial includes full access to all Professional plan features. No credit card
                    required to start.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are there any setup fees?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No, there are no setup fees or hidden costs. You only pay the monthly or annual subscription fee for
                    your chosen plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers
                    can also pay by invoice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your free trial today and see how AdBridge can transform your advertising strategy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                  onClick={() => handleSubscribe("price_professional_monthly", "Professional")}
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
