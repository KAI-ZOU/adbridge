import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Video, FileText, Users, Calendar, Download, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export default function Resources() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Resources & Learning Center
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to succeed with AdBridge. From getting started guides to advanced strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Here</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Essential resources to get you up and running quickly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Getting Started Guide"
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 left-2">Guide</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Getting Started with AdBridge</CardTitle>
                  <CardDescription>
                    A comprehensive guide to setting up your first campaign and finding the right advertising partners.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>15 min read</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Video Tutorial"
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500">Video</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Platform Overview Video</CardTitle>
                  <CardDescription>
                    Watch this 10-minute video to learn about all the key features and how to navigate the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Video className="h-4 w-4" />
                      <span>10 min watch</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Watch Now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Best Practices"
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-500">Best Practices</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Campaign Optimization Tips</CardTitle>
                  <CardDescription>
                    Learn proven strategies to maximize your advertising ROI and improve campaign performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>12 min read</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Browse by Category</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find the resources that match your current needs and experience level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and API documentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li>• API Reference</li>
                    <li>• Integration Guides</li>
                    <li>• Feature Documentation</li>
                    <li>• Troubleshooting</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Browse Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Step-by-step video guides and webinars</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li>• Platform Walkthrough</li>
                    <li>• Feature Deep Dives</li>
                    <li>• Live Webinars</li>
                    <li>• Customer Stories</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Blog & Articles</CardTitle>
                  <CardDescription>Industry insights and best practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li>• Industry Trends</li>
                    <li>• Success Stories</li>
                    <li>• Strategy Guides</li>
                    <li>• Product Updates</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Read Blog
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Downloads</CardTitle>
                  <CardDescription>Templates, checklists, and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li>• Campaign Templates</li>
                    <li>• ROI Calculators</li>
                    <li>• Checklists</li>
                    <li>• White Papers</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View Downloads
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest from Our Blog</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay updated with the latest advertising trends and AdBridge news.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Advertising Trends 2024"
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>January 15, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <CardTitle className="text-lg">Top Advertising Trends to Watch in 2024</CardTitle>
                  <CardDescription>
                    Discover the emerging trends that will shape the advertising landscape this year.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="ROI Optimization"
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>January 10, 2024</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                  <CardTitle className="text-lg">How to Maximize Your Advertising ROI</CardTitle>
                  <CardDescription>
                    Proven strategies and tactics to get the most out of your advertising budget.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Success Story"
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>January 5, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <CardTitle className="text-lg">Case Study: 300% ROI Increase</CardTitle>
                  <CardDescription>
                    Learn how TechCorp achieved remarkable results using AdBridge's platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Events</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our webinars and events to learn from experts and connect with other users.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">February 15, 2024 • 2:00 PM EST</span>
                  </div>
                  <CardTitle>Advanced Campaign Optimization Webinar</CardTitle>
                  <CardDescription>
                    Learn advanced techniques for optimizing your advertising campaigns for maximum ROI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">45 spots remaining</span>
                    </div>
                    <Button size="sm">Register Free</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">February 22, 2024 • 1:00 PM EST</span>
                  </div>
                  <CardTitle>Q&A with AdBridge Experts</CardTitle>
                  <CardDescription>
                    Get your questions answered by our team of advertising and platform experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">32 spots remaining</span>
                    </div>
                    <Button size="sm">Register Free</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Help?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our support team is here to help you succeed with AdBridge.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant help from our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Help Center</CardTitle>
                  <CardDescription>Browse our comprehensive knowledge base</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Community</CardTitle>
                  <CardDescription>Connect with other AdBridge users</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Join Community
                  </Button>
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
                  Use these resources to accelerate your success with AdBridge.
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
                    Contact Support
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
