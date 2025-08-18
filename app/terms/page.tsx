"use client"

import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertTriangle, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
                <FileText className="h-8 w-8 text-[#8ef0a7]" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-white/70 text-lg">Please read these terms carefully before using AdBridge.</p>
            <p className="text-white/50 text-sm mt-2">Last updated: February 1, 2024</p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Scale className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Acceptance of Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p className="text-sm">
                  By accessing or using AdBridge ("the Platform"), you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using the Platform.
                </p>
                <p className="text-sm">
                  These terms apply to all users of the Platform, including businesses, content creators, and visitors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Platform Description</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p className="text-sm">
                  AdBridge is a marketplace platform that connects businesses with content creators for marketing
                  collaborations. Our services include:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Matching businesses with relevant content creators</li>
                  <li>• Facilitating communication and collaboration</li>
                  <li>• Processing payments for completed campaigns</li>
                  <li>• Providing analytics and performance tracking</li>
                  <li>• Creator-to-creator promotional services marketplace</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Account Creation</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• You must sign up using Google OAuth authentication</li>
                    <li>• You must provide accurate and complete information</li>
                    <li>• You are responsible for maintaining account security</li>
                    <li>• One account per person or business entity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Account Types</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Business Accounts:</strong> For companies seeking creator partnerships
                    </li>
                    <li>
                      • <strong>Creator Accounts:</strong> For content creators offering services
                    </li>
                    <li>• Each account type has specific features and responsibilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">All Users</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Provide accurate information in your profile</li>
                    <li>• Communicate professionally and respectfully</li>
                    <li>• Comply with all applicable laws and regulations</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Report any suspicious or inappropriate behavior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Businesses</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Provide clear campaign requirements and expectations</li>
                    <li>• Make payments promptly upon campaign completion</li>
                    <li>• Respect creator intellectual property and usage rights</li>
                    <li>• Provide honest feedback and ratings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Creators</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Deliver content as agreed upon in campaigns</li>
                    <li>• Disclose sponsored content according to FTC guidelines</li>
                    <li>• Maintain authentic engagement and follower counts</li>
                    <li>• Meet agreed-upon deadlines and quality standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Payments and Fees</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Subscriptions</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Free tier with limited features</li>
                    <li>• Professional tier at $49/month</li>
                    <li>• Enterprise tier with custom pricing</li>
                    <li>• Payments processed securely through Stripe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Creator Fees</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Free to join and create profiles</li>
                    <li>• 5% commission on completed paid collaborations</li>
                    <li>• Payments processed within 7 days of campaign completion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Refunds</h4>
                  <p className="text-sm">
                    Refunds are handled on a case-by-case basis. Contact support for disputes or issues with campaigns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  <CardTitle className="text-white">Prohibited Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p className="text-sm">The following activities are strictly prohibited:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Creating fake accounts or providing false information</li>
                  <li>• Purchasing fake followers, likes, or engagement</li>
                  <li>• Harassment, discrimination, or inappropriate behavior</li>
                  <li>• Sharing illegal, harmful, or offensive content</li>
                  <li>• Attempting to circumvent platform fees</li>
                  <li>• Spamming or unsolicited marketing</li>
                  <li>• Violating intellectual property rights</li>
                  <li>• Using the platform for illegal activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Content and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">User Content</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• You retain ownership of content you create</li>
                    <li>• You grant AdBridge license to display your content on the platform</li>
                    <li>• You are responsible for ensuring you have rights to all content you share</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Platform Content</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• AdBridge owns all platform features, design, and functionality</li>
                    <li>• You may not copy, modify, or distribute platform content</li>
                    <li>• Our trademarks and logos are protected intellectual property</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p className="text-sm">
                  AdBridge provides the platform "as is" without warranties. We are not liable for:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Disputes between businesses and creators</li>
                  <li>• Quality or performance of user-generated content</li>
                  <li>• Technical issues or platform downtime</li>
                  <li>• Loss of data or business opportunities</li>
                  <li>• Actions of other users on the platform</li>
                </ul>
                <p className="text-sm mt-4">
                  Our total liability is limited to the amount you paid for platform services in the past 12 months.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Termination</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">By You</h4>
                  <p className="text-sm">
                    You may terminate your account at any time by contacting support or using account settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">By AdBridge</h4>
                  <p className="text-sm">
                    We may suspend or terminate accounts that violate these terms, engage in prohibited activities, or
                    for any reason with 30 days notice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Effect of Termination</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Access to the platform will be revoked</li>
                    <li>• Outstanding payments will be processed</li>
                    <li>• Your data may be retained as required by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p className="text-sm">
                  We may update these Terms of Service from time to time. We will notify users of significant changes
                  via email or platform notifications. Continued use of the platform after changes constitutes
                  acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="text-sm mb-4">If you have questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2 text-sm">
                  <p>Email: legal@adbridge.com</p>
                  <p>Address: 123 Creator Street, San Francisco, CA 94105</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
