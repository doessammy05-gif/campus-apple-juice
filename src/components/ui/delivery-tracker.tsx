'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Package, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

const LANDMARKS = [
  { name: "Main Gate", x: 0 },
  { name: "Student Union", x: 25 },
  { name: "Central Library", x: 50 },
  { name: "Science Quad", x: 75 },
  { name: "North Dorms", x: 100 },
]

export function DeliveryTracker() {
  const [progress, setProgress] = useState(0)
  const [currentLandmark, setCurrentLandmark] = useState(LANDMARKS[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 0.5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const landmark = LANDMARKS.find(l => progress >= l.x && (progress < (LANDMARKS[LANDMARKS.indexOf(l)+1]?.x || 101)))
      || LANDMARKS[LANDMARKS.length - 1]
    setCurrentLandmark(landmark)
  }, [progress])

  return (
    <div className="p-4 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl w-full max-w-md overflow-hidden relative group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <Truck size={20} />
            </div>
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Live Delivery</p>
            <p className="text-sm font-bold text-text-brand">Sprinting to your spot</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-tighter flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Live Now
        </div>
      </div>

      <div className="relative h-2 w-full bg-gray-100 rounded-full mb-8">
        {/* Track line */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(251,113,133,0.5)]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Landmarks */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between">
          {LANDMARKS.map((l, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group/landmark">
              <div className={cn(
                "w-3 h-3 rounded-full border-2 border-white shadow-sm transition-all duration-300",
                progress >= l.x ? "bg-primary scale-125" : "bg-gray-300"
              )} />
              <span className={cn(
                "absolute top-6 text-[10px] font-medium whitespace-nowrap transition-all duration-300 opacity-0 group-hover/landmark:opacity-100",
                "text-text-brand/60 group-hover/landmark:text-primary"
              )}>
                {l.name}
              </span>
            </div>
          ))}
        </div>

        {/* Delivery Icon */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary flex items-center justify-center z-20"
          style={{ left: `${progress}%` }}
        >
          <Package size={14} className="text-primary" />
        </motion.div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-gray-400 font-bold uppercase">Next Stop</p>
          <p className="text-sm font-bold text-text-brand flex items-center gap-1">
            <MapPin size={14} className="text-primary" />
            {currentLandmark.name}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-text-brand">4<span className="text-sm font-normal text-gray-400 ml-1">min</span></p>
        </div>
      </div>
    </div>
  )
}
