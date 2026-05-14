'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const FLAVORS = [
  {
    id: 'classic',
    name: 'Classic Crisp',
    description: 'Refreshingly sharp, perfect for deep focus.',
    color: 'bg-green-400',
    accent: '#BBF7D0',
    glow: 'shadow-green-500/50',
    benefit: 'Focus'
  },
  {
    id: 'crimson',
    name: 'Crimson Blush',
    description: 'Sweet and bold, a late-night study companion.',
    color: 'bg-rose-400',
    accent: '#FCA5A5',
    glow: 'shadow-rose-500/50',
    benefit: 'Endurance'
  },
  {
    id: 'golden',
    name: 'Golden Hour',
    description: 'Pure sunshine in a bottle, boosts mood and energy.',
    color: 'bg-yellow-400',
    accent: '#FDE68A',
    glow: 'shadow-yellow-500/50',
    benefit: 'Mood'
  },
  {
    id: 'midnight',
    name: 'Midnight Orchard',
    description: 'A complex blend of dark apples and berries, for the bold.',
    color: 'bg-purple-400',
    accent: '#C084FC',
    glow: 'shadow-purple-500/50',
    benefit: 'Power'
  }
]

export function FlavorPicker() {
  const [selected, setSelected] = useState(FLAVORS[0])

  return (
    <section id="flavors" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-text-brand leading-tight">
            Pick Your <span className="text-primary">Vibe</span>
          </h2>
          <p className="text-lg text-text-brand/60 max-w-2xl mx-auto">
            Every student is different. Choose the flavor that matches your current hustle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Preview Area */}
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-75" />

            <div className="relative w-64 h-96">
              {/* Bottle Shape */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden z-10">
                {/* Liquid Level Animation */}
                <motion.div
                  animate={{
                    backgroundColor: selected.accent,
                    height: ['90%', '92%', '90%']
                  }}
                  transition={{
                    backgroundColor: { duration: 0.5 },
                    height: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={cn("absolute bottom-0 left-0 right-0 transition-colors duration-500", selected.color)}
                  style={{ height: '90%' }}
                />

                {/* Bottle Cap */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-8 bg-text-brand rounded-t-lg z-20 shadow-md" />

                {/* Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-24 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg z-20 p-4 flex flex-col items-center justify-center text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Premium Edition</p>
                  <motion.p
                    key={selected.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-bold text-text-brand"
                  >
                    {selected.name}
                  </motion.p>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className={cn(
                "absolute -inset-4 rounded-[3.5rem] blur-2xl opacity-20 transition-colors duration-500",
                selected.color
              )} />
            </div>
          </div>

          {/* Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FLAVORS.map((flavor) => (
              <motion.div
                key={flavor.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(flavor)}
                className={cn(
                  "p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group",
                  selected.id === flavor.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-gray-100 bg-white hover:border-primary/30"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", flavor.color)}>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                  {selected.id === flavor.id && (
                    <div className="p-1 bg-primary text-white rounded-full">
                      <Check size={16} />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-text-brand mb-2">{flavor.name}</h3>
                <p className="text-text-brand/60 text-sm leading-relaxed mb-4">
                  {flavor.description}
                </p>

                <div className="flex items-center gap-2">
                  <span className={cn("text-[10px] font-bold uppercase px-2 py-1 rounded-full text-white", flavor.color)}>
                    {flavor.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
