"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AdBridge work?",
    answer:
      "AdBridge connects businesses with local content creators through our AI-powered matching system. Businesses post campaigns, creators apply, and our platform facilitates the entire collaboration process from start to finish.",
  },
  {
    question: "What types of creators can I find?",
    answer:
      "Our platform features creators across all major social media platforms including Instagram, TikTok, YouTube, and Twitter. We have micro-influencers, nano-influencers, and established creators in various niches like fashion, food, tech, fitness, and more.",
  },
  {
    question: "How much does it cost?",
    answer:
      "AdBridge charges a small commission fee only when successful collaborations are completed. There are no upfront costs or monthly fees. Pricing varies based on creator rates and campaign scope.",
  },
  {
    question: "How do I know if a creator is right for my brand?",
    answer:
      "Each creator profile includes detailed analytics, past work examples, audience demographics, and engagement rates. You can also view reviews from previous collaborations and communicate directly before starting a campaign.",
  },
  {
    question: "What happens if I'm not satisfied with the content?",
    answer:
      "We have a comprehensive review process and dispute resolution system. Creators must deliver content that meets the agreed specifications. If issues arise, our support team mediates to ensure fair outcomes for both parties.",
  },
  {
    question: "How long does it take to find creators?",
    answer:
      "Our AI matching system typically presents suitable creators within 24 hours of posting your campaign. The actual collaboration timeline depends on your specific requirements and the creators' availability.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about AdBridge and how it works
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-white hover:text-[#8ef0a7] transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
