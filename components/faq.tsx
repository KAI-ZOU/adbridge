"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "How does AdBridge's AI matching work?",
    answer:
      "Our AI analyzes factors like location, audience demographics, content style, industry alignment, and past performance to connect businesses with the most relevant creators. The system continuously learns and improves matching accuracy.",
  },
  {
    question: "What are the fees for using AdBridge?",
    answer:
      "Creator accounts are free with a 5% commission on successful paid collaborations. Business accounts start free with basic features, and paid plans begin at $49/month for advanced features like unlimited campaigns and detailed analytics.",
  },
  {
    question: "How do payments work?",
    answer:
      "We use a secure escrow system. Businesses fund campaigns upfront, funds are held securely, and creators receive payment automatically upon successful completion and approval of deliverables. This protects both parties.",
  },
  {
    question: "What types of content can be created?",
    answer:
      "AdBridge supports all major social media platforms including TikTok, Instagram, YouTube, Twitter, and more. Content types range from product reviews and tutorials to lifestyle content and behind-the-scenes footage.",
  },
  {
    question: "Is AdBridge available in my area?",
    answer:
      "AdBridge is currently available in major cities across the United States and expanding rapidly. Our platform shows active creators in your specific location when you sign up.",
  },
  {
    question: "How do I ensure content quality?",
    answer:
      "All creators on AdBridge are vetted and have portfolios showcasing their work. Businesses can review creator profiles, past work, and ratings before initiating collaborations. We also provide clear guidelines and approval processes.",
  },
]

export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-white/70">Get answers to common questions about AdBridge and how it works.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <button
                className="w-full text-left p-6 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold pr-4">{faq.question}</h3>
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-[#8ef0a7] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white/60 flex-shrink-0" />
                  )}
                </div>
              </button>

              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-white/60 mb-4">Still have questions?</p>
        <a
          href="/contact"
          className="inline-flex items-center text-[#8ef0a7] hover:text-[#7de096] transition-colors font-medium"
        >
          Contact our support team →
        </a>
      </div>
    </div>
  )
}
