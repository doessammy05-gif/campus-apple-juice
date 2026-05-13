'use client'

import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from 'lucide-react' // We will use lucide for icons, not a Button component
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
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pure Energy for Campus
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-text-brand leading-[0.9] tracking-tighter">
            Freshness <br />
            <span className="text-primary italic">Unbottled.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-brand/70 max-w-lg leading-relaxed font-light">
            Sourced from the crispest orchards and delivered straight to your dorm.
            The natural spark you need to conquer that 8 AM lecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-cta text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer flex items-center gap-2">
              Grab Your Bottle
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-text-brand border-2 border-text-brand/10 rounded-full font-bold text-lg transition-all hover:bg-gray-50 cursor-pointer">
              See Flavors
            </button>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto lg:h-[700px] w-full group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse pointer-events-none" />

          <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-[1.02] cursor-pointer">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />

            {/* Overlay Card for "Live Status" */}
            <div className="absolute bottom-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Campus Status</p>
                  <p className="text-sm font-bold text-text-brand">Delivering to Library North</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
