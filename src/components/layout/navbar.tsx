'use client'

import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-between shadow-lg transition-all hover:shadow-xl cursor-pointer">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
            🍎
          </div>
          <span className="font-heading text-xl font-bold text-text-brand tracking-tight">
            CampusAppleJuice
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-brand/70">
          <Link href="#journey" className="hover:text-primary transition-colors cursor-pointer">The Journey</Link>
          <Link href="#features" className="hover:text-primary transition-colors cursor-pointer">Benefits</Link>
          <Link href="#reviews" className="hover:text-primary transition-colors cursor-pointer">Reviews</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#order"
            className="hidden sm:flex items-center gap-2 bg-cta text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-brand hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 p-4 animate-in fade-in slide-in-from-top-4">
          <div className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
            <Link href="#journey" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-brand hover:text-primary cursor-pointer">The Journey</Link>
            <Link href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-brand hover:text-primary cursor-pointer">Benefits</Link>
            <Link href="#reviews" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-brand hover:text-primary cursor-pointer">Reviews</Link>
            <hr className="border-gray-100" />
            <Link
              href="#order"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-cta text-white py-3 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
