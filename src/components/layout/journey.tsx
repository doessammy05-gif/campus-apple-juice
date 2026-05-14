'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Truck, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/ui/fade-in'

const JOURNEY_STEPS = [
  {
    title: "The Orchard",
    description: "Hand-picked from the sun-drenched valleys of Washington, where only the crispest Honeycrisps make the cut.",
    color: "bg-red-500",
    icon: "🍎"
  },
  {
    title: "Cold Press",
    description: "We use a gentle cold-press process to keep every single vitamin and enzyme intact for maximum energy.",
    color: "bg-rose-400",
    icon: "⚙️"
  },
  {
    title: "Pure Chill",
    description: "Flash-chilled to perfection to lock in that 'just-picked' flavor you crave during all-nighters.",
    color: "bg-blue-400",
    icon: "❄️"
  },
  {
    title: "Campus Drop",
    description: "Direct to your dorm or library desk. No one should have to walk to the store for real energy.",
    color: "bg-primary",
    icon: "🚚"
  }
]

export function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-16">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-7xl font-bold text-text-brand leading-tight">
              The <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-text-brand max-w-xl">
              From the branch to your bottle. We don't cut corners, we just press them.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 pb-12 no-scrollbar">
        {JOURNEY_STEPS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-w-[300px] md:min-w-[450px] snap-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-[500px] bg-background-brand rounded-[3rem] p-8 border-4 border-transparent group-hover:border-primary transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>

              <div className="flex flex-col gap-6">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg", step.color)}>
                  {step.icon}
                </div>
                <h3 className="text-4xl font-bold text-text-brand">{step.title}</h3>
                <p className="text-xl text-text-brand leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm font-bold text-primary">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  {index + 1}
                </span>
                Step of Freshness
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
