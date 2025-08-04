import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  BarChart3,
  Users,
  Zap,
  Shield,
  Target,
  TrendingUp,
  MessageSquare,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Features() {
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
                  Powerful Features for Modern Advertising
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover all the tools and capabilities that make AdBridge the leading platform for connecting
                  businesses with advertisers.
                </p>
              </div>
              <Link href="/get-started">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Core Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Global Network Access</CardTitle>
                  <CardDescription>Connect with advertisers worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access our extensive network of verified advertisers and content promoters across 50+ countries.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>50+ countries covered</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>10,000+ verified partners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Multi-language support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Smart Matching Algorithm</CardTitle>
                  <CardDescription>AI-powered partner recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our advanced AI analyzes your business profile to find the most relevant advertising partners.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>95% match accuracy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Real-time optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Behavioral analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>Comprehensive performance insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Track campaign performance with detailed analytics and actionable insights.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Real-time dashboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>ROI tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Campaign Management</CardTitle>
                  <CardDescription>Streamlined workflow tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage multiple campaigns efficiently with our intuitive campaign management tools.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Bulk operations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Automated scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Template library</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Quality Assurance</CardTitle>
                  <CardDescription>Verified partners only</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    All partners undergo rigorous verification to ensure quality and reliability.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Background checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Performance monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Fraud protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Quick Setup</CardTitle>
                  <CardDescription>Get started in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our streamlined onboarding process gets you up and running quickly.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>5-minute setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Guided tutorials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Import existing data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore by Category</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Dive deeper into specific feature categories that matter most to your business.
                </p>
              </div>
            </div>
            <Tabs defaultValue="analytics" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
              </TabsList>
              <TabsContent value="analytics" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Advanced Analytics & Reporting</h3>
                    <p className="text-muted-foreground">
                      Get deep insights into your advertising performance with our comprehensive analytics suite.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Real-time performance metrics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Custom dashboard creation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Automated report generation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Predictive analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Analytics Dashboard"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="automation" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Smart Automation Tools</h3>
                    <p className="text-muted-foreground">
                      Automate repetitive tasks and optimize your campaigns with intelligent automation features.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Automated bid optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Smart budget allocation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Campaign scheduling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Performance-based adjustments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Automation Workflow"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="collaboration" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Work seamlessly with your team and advertising partners using our collaboration tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Built-in messaging system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>File sharing and approval</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Role-based permissions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Activity tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Team Collaboration"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="integration" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Seamless Integrations</h3>
                    <p className="text-muted-foreground">
                      Connect AdBridge with your existing tools and platforms for a unified workflow.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>CRM integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>Marketing automation platforms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>Social media platforms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>Analytics tools</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Software Integrations"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Experience These Features?</h2>
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
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent">
                    View Pricing
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
