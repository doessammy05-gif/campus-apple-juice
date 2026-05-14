'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/ui/fade-in'

const REVIEWS = [
  {
    name: "Alex Rivera",
    role: "CS Junior",
    content: "Honestly, this juice is the only reason I survived my 3-day coding marathon. Natural energy without the jitters!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696347-1a977bc3d9d3?w=100&h=100&fit=crop&q=80"
  },
  {
    name: "Maya Chen",
    role: "Pre-Med Sophomore",
    content: "The delivery to the library is a game changer. I don't have to leave my study spot to get a healthy boost.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be98276a8669?w=100&h=100&fit=crop&q=80"
  },
  {
    name: "Jordan Smith",
    role: "Art History Senior",
    content: "Tastes incredibly fresh. You can actually tell it's cold-pressed. Plus, the eco-bottles are awesome.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
  }
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col gap-4 mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-text-brand leading-tight">
              Campus <span className="text-primary">Favorites</span>
            </h2>
            <p className="text-lg text-text-brand max-w-2xl mx-auto">
              See why students across campus are swapping coffee for the natural power of apple juice.
            </p>
          </div>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full p-8 bg-background-brand border-none shadow-xl relative group hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="absolute top-[-20px] right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Quote size={48} />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4 fill-current",
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>

                  <p className="text-lg text-text-brand leading-relaxed italic">
                    "{review.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border-2 border-primary"
                    />
                    <div>
                      <p className="font-bold text-text-brand">{review.name}</p>
                      <p className="text-sm text-text-brand">{review.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
