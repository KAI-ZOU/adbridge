import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "Local Eats Co.",
    content:
      "AdBridge helped us connect with amazing food creators in our area. Our restaurant saw a 40% increase in foot traffic from their authentic reviews!",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    company: "@MarcusLifestyle",
    content:
      "I've earned over $5,000 in my first three months on AdBridge. The platform makes it so easy to find brands that align with my values and audience.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Emma Thompson",
    role: "Small Business Owner",
    company: "Bloom Boutique",
    content:
      "The AI matching is incredible - every creator AdBridge suggested was a perfect fit for our fashion brand. Our online sales doubled!",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "David Park",
    role: "Influencer",
    company: "@DavidTechTalks",
    content:
      "AdBridge's secure payment system gives me peace of mind. I know I'll get paid on time, every time. The platform is a game-changer for creators.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export function Testimonials() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">What Our Community Says</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-12">
        Hear from businesses and creators who are building successful partnerships on AdBridge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:scale-105 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#8ef0a7] text-[#8ef0a7]" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                  <p className="text-[#8ef0a7] text-xs">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
