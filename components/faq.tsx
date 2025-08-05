"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AdBridge work?",
    answer:
      "AdBridge uses AI to match businesses with local content creators based on audience demographics, content style, and campaign goals. Simply post your campaign requirements, and we'll connect you with the perfect creators.",
  },
  {
    question: "What types of content creators are on the platform?",
    answer:
      "We have creators across all major platforms including Instagram, TikTok, YouTube, Twitter, and LinkedIn. From micro-influencers to established content creators, covering niches like lifestyle, food, tech, fashion, and more.",
  },
  {
    question: "How much does it cost?",
    answer:
      "AdBridge is free to join for both businesses and creators. We only charge a small platform fee (5%) on successful campaign completions. No monthly subscriptions or hidden fees.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are held in escrow until campaign completion. Once the business approves the content, creators receive payment within 24-48 hours. We handle all payment processing securely.",
  },
  {
    question: "What if I'm not satisfied with the content?",
    answer:
      "We offer revision rounds and have a dispute resolution process. Our team reviews all campaigns to ensure quality standards are met. If issues persist, we provide full refunds.",
  },
  {
    question: "Can I work with creators outside my location?",
    answer:
      "Yes! While we specialize in local connections, you can collaborate with creators anywhere. Our platform supports both local and remote campaign management.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Everything you need to know about AdBridge</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:text-[#8ef0a7] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
