'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const CAMPUS_SPOTS = [
  { id: 'lib-north', name: 'Library North', description: 'Quiet study zone, near the archives.' },
  { id: 'student-union', name: 'Student Union', description: 'The heart of campus, near the food court.' },
  { id: 'sci-quad', name: 'Science Quad', description: 'Lab-side delivery, perfect for long experiments.' },
  { id: 'north-dorms', name: 'North Dorms', description: 'Right at your door, no walk required.' },
  { id: 'arts-wing', name: 'Arts Wing', description: 'Creative corner, near the sculpture garden.' },
  { id: 'sports-complex', name: 'Sports Complex', description: 'Fuel up after a workout or a game.' },
]

export function SpotSelector({ onSave }: { onSave: (spot: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [savedSpot, setSavedSpot] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('campus-apple-favorite-spot')
    if (stored) {
      setSavedSpot(stored)
      setSelected(stored)
    }
  }, [])

  const handleSave = () => {
    if (selected) {
      localStorage.setItem('campus-apple-favorite-spot', selected)
      setSavedSpot(selected)
      onSave(selected)
    }
  }

  return (
    <div className="p-8 bg-white rounded-[2.5rem] border-2 border-gray-100 shadow-2xl max-w-2xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
          <MapPin size={14} />
          Location
        </div>
        <h3 className="text-3xl font-bold text-text-brand">Where should we drop it?</h3>
        <p className="text-text-brand/80">Select your usual study spot for faster deliveries.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {CAMPUS_SPOTS.map((spot) => (
          <motion.div
            key={spot.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(spot.id)}
            className={cn(
              "p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-center justify-between",
              selected === spot.id
                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                : "border-gray-100 bg-gray-50 hover:border-primary/30"
            )}
          >
            <div className="flex flex-col gap-1">
              <span className="font-bold text-text-brand">{spot.name}</span>
              <span className="text-xs text-text-brand/80">{spot.description}</span>
            </div>
            {selected === spot.id && (
              <div className="p-1 bg-primary text-white rounded-full">
                <Check size={12} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-text-brand/80">
          {savedSpot
            ? `Saved: ${CAMPUS_SPOTS.find(s => s.id === savedSpot)?.name}`
            : 'No spot saved yet'}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          disabled={!selected}
          className={cn(
            "px-6 py-3 rounded-full font-bold text-sm transition-all",
            selected
              ? "bg-cta text-white shadow-lg hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          Save Favorite Spot
        </motion.button>
      </div>
    </div>
  )
}
