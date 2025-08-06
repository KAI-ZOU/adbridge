"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Phone, MapPin, Send, Clock, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission here
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@adbridge.com",
      responseTime: "Within 24 hours",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 9 AM - 6 PM PST",
      responseTime: "Instant response",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with an expert",
      contact: "(555) 123-4567",
      responseTime: "Business hours only",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ]

  const faqs = [
    {
      question: "How do I get started as a business?",
      answer:
        "Sign up with Google, complete your business profile, and start browsing creators. Our AI will match you with relevant creators based on your industry and goals.",
    },
    {
      question: "How do creators get paid?",
      answer:
        "Creators receive payment within 7 days of campaign completion. We charge a 5% commission on completed collaborations. Payments are processed securely through Stripe.",
    },
    {
      question: "What types of content can creators offer?",
      answer:
        "Creators can offer various services including social media posts, stories, reels, reviews, tutorials, and full collaboration campaigns across platforms like Instagram, TikTok, YouTube, and Twitter.",
    },
    {
      question: "How does the matching algorithm work?",
      answer:
        "Our AI considers factors like location, industry, audience demographics, content style, budget, and past performance to match businesses with the most suitable creators.",
    },
    {
      question: "Can I cancel a campaign?",
      answer:
        "Campaigns can be cancelled before work begins. Once a creator starts working, cancellation terms depend on the specific agreement. Contact support for assistance with disputes.",
    },
    {
      question: "Is there a minimum follower requirement for creators?",
      answer:
        "No minimum follower count required. We welcome creators of all sizes, from micro-influencers to established creators. Quality and engagement matter more than follower count.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">


            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have questions? Need help? We're here to support your creator journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Methods</h2>

              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-12 w-12 rounded-xl ${method.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                        <p className="text-white/70 text-sm mb-2">{method.description}</p>
                        <p className="text-white font-medium text-sm mb-1">{method.contact}</p>
                        <div className="flex items-center gap-1 text-white/60 text-xs">
                          <Clock className="h-3 w-3" />
                          {method.responseTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office Info */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#8ef0a7]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#8ef0a7]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office Location</h3>
                      <p className="text-white/70 text-sm mb-2">Visit us in person</p>
                      <p className="text-white text-sm">
                        123 Creator Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-white/70">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#8ef0a7]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#8ef0a7]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-white">
                          Category *
                        </Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-[#8ef0a7]">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-white/20">
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="business">Business Partnership</SelectItem>
                            <SelectItem value="creator">Creator Support</SelectItem>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your inquiry"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#8ef0a7]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide as much detail as possible about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#8ef0a7] min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-[#8ef0a7]/20 flex items-center justify-center">
                  <HelpCircle className="h-8 w-8 text-[#8ef0a7]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70">Find quick answers to common questions about AdBridge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#8ef0a7]/20 to-emerald-400/20 backdrop-blur-sm border-[#8ef0a7]/30 rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Don't hesitate to reach out with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#8ef0a7] hover:bg-[#7de096] text-black font-semibold rounded-xl">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-xl bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
