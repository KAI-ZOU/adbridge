import Link from "next/link"
import { ArrowRight, CheckCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
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
                <TabsContent value="monthly">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Starter</CardTitle>
                        <CardDescription>Perfect for small businesses getting started</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $49<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 5 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Basic analytics dashboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Standard matching algorithm</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-muted-foreground">Advanced automation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-muted-foreground">Custom reporting</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative border-primary shadow-lg">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>Professional</CardTitle>
                        <CardDescription>Ideal for growing businesses with active marketing</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 20 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Advanced analytics & reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Priority email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>AI-powered optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Campaign automation tools</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom dashboard</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Business</CardTitle>
                        <CardDescription>For established businesses scaling their advertising</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $199<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 50 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Advanced analytics & insights</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Phone & email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Multi-user collaboration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>API access</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>White-label options</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>Custom solutions for large organizations</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Unlimited campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom analytics dashboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Dedicated account manager</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>SLA guarantee</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>On-premise deployment</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-transparent" variant="outline">
                          Contact Sales
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Starter</CardTitle>
                        <CardDescription>Perfect for small businesses getting started</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $39<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                        <div className="text-sm text-green-600">Save $120/year</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 5 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Basic analytics dashboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Standard matching algorithm</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-muted-foreground">Advanced automation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-muted-foreground">Custom reporting</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative border-primary shadow-lg">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>Professional</CardTitle>
                        <CardDescription>Ideal for growing businesses with active marketing</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $79<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                        <div className="text-sm text-green-600">Save $240/year</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 20 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Advanced analytics & reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Priority email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>AI-powered optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Campaign automation tools</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom dashboard</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Business</CardTitle>
                        <CardDescription>For established businesses scaling their advertising</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          $159<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                        <div className="text-sm text-green-600">Save $480/year</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Up to 50 active campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Advanced analytics & insights</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Phone & email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Multi-user collaboration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>API access</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>White-label options</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Free Trial</Button>
                      </CardFooter>
                    </Card>

                    <Card className="relative">
                      <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>Custom solutions for large organizations</CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Unlimited campaigns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom analytics dashboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Dedicated account manager</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>SLA guarantee</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>On-premise deployment</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-transparent" variant="outline">
                          Contact Sales
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
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
                <Link href="/get-started">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
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
      <Footer />
    </div>
  )
}
