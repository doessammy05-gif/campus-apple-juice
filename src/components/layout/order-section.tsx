'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { SpotSelector } from '@/components/ui/spot-selector'

export function OrderSection() {
  const handleSaveSpot = (spot: string) => {
    console.log(`Favorite spot saved: ${spot}`)
  }

  return (
    <section id="order" className="py-24 bg-background-brand overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-bold uppercase tracking-wider w-fit border border-cta/20">
                <ShoppingCart size={12} />
                Quick Order
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-text-brand leading-tight">
                Get It <span className="text-primary">Now.</span>
              </h2>
              <p className="text-xl text-text-brand/80 leading-relaxed">
                Freshly pressed apple juice, delivered to your exact coordinates. No more fighting for vending machine space.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                {[
                  "Cold-pressed perfection",
                  "15-minute campus delivery",
                  "Eco-friendly bottles"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-text-brand font-medium">
                    <div className="p-1 bg-primary text-white rounded-full">
                      <CheckCircle size={16} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SpotSelector onSave={handleSaveSpot} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
