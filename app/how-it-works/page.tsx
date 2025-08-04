import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How AdBridge Works</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our simple process connects your business with the perfect advertising partners.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <div className="grid gap-12">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-primary p-2 text-primary-foreground">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <h2 className="text-2xl font-bold">Create Your Profile</h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Sign up and create a detailed profile of your business, including your industry, target
                        audience, advertising goals, and budget. The more information you provide, the better matches we
                        can find for you.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Define your target audience demographics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Set clear advertising objectives</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Specify your budget parameters</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Upload your brand assets and guidelines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Create Your Profile"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Get Matched"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-primary p-2 text-primary-foreground">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <h2 className="text-2xl font-bold">Get Matched</h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our AI-powered matching algorithm analyzes your profile and connects you with the most suitable
                        advertisers and content promoters from our extensive network. You'll receive a curated list of
                        potential partners based on your specific needs.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>AI-powered partner recommendations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Review detailed partner profiles</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>See performance metrics and past campaigns</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Filter and sort by relevance and performance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-primary p-2 text-primary-foreground">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <h2 className="text-2xl font-bold">Launch Campaigns</h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Once you've selected your advertising partners, use our platform to collaborate, create, and
                        launch effective campaigns. Our tools make it easy to manage multiple campaigns and track their
                        performance in real-time.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Streamlined campaign creation tools</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Built-in communication channels</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Real-time performance tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Optimization recommendations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Launch Campaigns"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The AdBridge Advantage</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  What makes our platform different from traditional advertising solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Targeted Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Instead of casting a wide net, we connect you with partners who are specifically relevant to your
                    business and audience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our subscription model means you're not paying per click or impression, but for access to quality
                    partnerships.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We verify all advertisers and promoters in our network to ensure they meet our quality standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get detailed insights into campaign performance with our comprehensive analytics dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our AI continuously learns from campaign performance to improve future matching and recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team of advertising experts is available to help you maximize the value of your campaigns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Advertising?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that have already improved their advertising ROI with AdBridge.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/get-started">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Get Started Now
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
