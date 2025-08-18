"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8ef0a7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">

            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-[#8ef0a7]/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#8ef0a7]" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/70 text-lg">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-white/50 text-sm mt-2">Last updated: February 1, 2024</p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Information We Collect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Personal Information</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Name and email address (via Google OAuth)</li>
                    <li>• Profile information you provide (bio, location, content preferences)</li>
                    <li>• Business information (company name, industry, campaign details)</li>
                    <li>• Creator information (social media handles, follower counts, content samples)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Usage Information</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• How you interact with our platform</li>
                    <li>• Campaign performance metrics</li>
                    <li>• Communication between businesses and creators</li>
                    <li>• Device information and IP addresses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <CardTitle className="text-white">How We Use Your Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Platform Services</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Match businesses with relevant creators</li>
                    <li>• Facilitate communication and collaboration</li>
                    <li>• Process payments and manage campaigns</li>
                    <li>• Provide analytics and performance insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Communication</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Send important platform updates and notifications</li>
                    <li>• Respond to your questions and support requests</li>
                    <li>• Share relevant opportunities and features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Improvement</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze usage patterns to improve our services</li>
                    <li>• Develop new features and functionality</li>
                    <li>• Ensure platform security and prevent fraud</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Information Sharing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">With Other Users</h4>
                  <p className="text-sm mb-2">We share certain profile information to facilitate connections:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Creator profiles are visible to businesses for matching</li>
                    <li>• Business information is shared with creators for collaboration</li>
                    <li>• Campaign details are shared between collaborating parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">With Service Providers</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Payment processors for secure transactions</li>
                    <li>• Cloud hosting providers for data storage</li>
                    <li>• Analytics services for platform improvement</li>
                    <li>• Customer support tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Legal Requirements</h4>
                  <p className="text-sm">
                    We may disclose information when required by law, to protect our rights, or to ensure platform
                    safety.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p className="text-sm">We implement industry-standard security measures to protect your information:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Secure authentication via Google OAuth</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Limited access to personal information</li>
                  <li>• Secure payment processing through trusted providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Access and Control</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• View and update your profile information</li>
                    <li>• Download your data</li>
                    <li>• Delete your account and associated data</li>
                    <li>• Control communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Portability</h4>
                  <p className="text-sm">You can request a copy of your data in a machine-readable format.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Opt-Out</h4>
                  <p className="text-sm">
                    You can opt out of non-essential communications and data processing where legally permitted.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p className="text-sm">We use cookies and similar technologies to:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Keep you signed in</li>
                  <li>• Remember your preferences</li>
                  <li>• Analyze platform usage</li>
                  <li>• Improve user experience</li>
                </ul>
                <p className="text-sm">You can control cookie settings through your browser preferences.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="text-sm mb-4">
                  If you have questions about this Privacy Policy or how we handle your information, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>Email: privacy@adbridge.com</p>
                  <p>Address: 123 Creator Street, San Francisco, CA 94105</p>
                </div>
                <p className="text-sm mt-4">We'll respond to your inquiry within 30 days.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
