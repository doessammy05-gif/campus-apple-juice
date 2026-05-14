'use client'

import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { FadeIn } from '@/components/ui/fade-in'
import { DeliveryTracker } from '@/components/ui/delivery-tracker'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      <Spotlight
        className="top-[-10%] left-[-10%] opacity-50"
        fill="#FB7185"
      />

      <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Pure Energy for Campus
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold text-text-brand leading-[0.9] tracking-tighter">
              Freshness <br />
              <span className="text-primary italic">Unbottled.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-text-brand/70 max-w-lg leading-relaxed font-light">
              Sourced from the crispest orchards and delivered straight to your dorm.
              The natural spark you need to conquer that 8 AM lecture.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-cta text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer flex items-center gap-2"
              >
                Grab Your Bottle
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-text-brand border-2 border-text-brand/10 rounded-full font-bold text-lg transition-all hover:bg-gray-50 cursor-pointer"
              >
                See Flavors
              </motion.button>
            </div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square lg:aspect-auto lg:h-[700px] w-full group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse pointer-events-none" />

          <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-[1.02] cursor-pointer">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />

            {/* Live Delivery Status Card */}
            <div className="absolute bottom-6 right-6 left-6 lg:left-auto lg:w-80 animate-float">
              <DeliveryTracker />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
