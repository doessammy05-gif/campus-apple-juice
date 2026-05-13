'use client'

import { motion } from 'framer-motion'
import { Zap, Truck, Leaf, Award, Clock, Flame } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    title: "Instant Energy",
    description: "Natural fructose that fuels your brain without the caffeine crash.",
    icon: Zap,
    size: "col-span-2 row-span-2",
    color: "bg-primary text-white",
    bg: "bg-primary/10"
  },
  {
    title: "Dorm Delivery",
    description: "Get it delivered in 15 mins.",
    icon: Truck,
    size: "col-span-1 row-span-1",
    color: "bg-cta text-white",
    bg: "bg-blue-50"
  },
  {
    title: "Eco-Bottle",
    description: "100% compostable.",
    icon: Leaf,
    size: "col-span-1 row-span-1",
    color: "bg-green-500 text-white",
    bg: "bg-green-50"
  },
  {
    title: "Premium Quality",
    description: "Sourced from organic orchards.",
    icon: Award,
    size: "col-span-1 row-span-2",
    color: "bg-secondary text-white",
    bg: "bg-rose-50"
  },
  {
    title: "Fast Pressed",
    description: "Bottled within 24 hours of picking.",
    icon: Clock,
    size: "col-span-1 row-span-1",
    color: "bg-orange-400 text-white",
    bg: "bg-orange-50"
  },
  {
    title: "Bold Taste",
    description: "Intense flavor in every sip.",
    icon: Flame,
    size: "col-span-1 row-span-1",
    color: "bg-red-600 text-white",
    bg: "bg-red-50"
  }
]

export function FeatureBento() {
  return (
    <section id="features" className="py-24 bg-background-brand">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-text-brand leading-tight">
            Why <span className="text-primary">CampusApple?</span>
          </h2>
          <p className="text-lg text-text-brand/60 max-w-2xl mx-auto">
            The perfect balance of health, energy, and convenience tailored for the student hustle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group cursor-pointer",
                feature.size
              )}
            >
              <Card className={cn(
                "h-full w-full p-8 flex flex-col justify-between border-none shadow-xl transition-all duration-300 group-hover:shadow-2xl",
                feature.bg
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-12",
                  feature.color
                )}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-text-brand">{feature.title}</h3>
                  <p className="text-text-brand/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
