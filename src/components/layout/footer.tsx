'use client'

import { ShoppingCart, Camera, Share2, Users } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-text-brand text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cta rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Final CTA Section */}
        <div className="flex flex-col items-center text-center mb-24 gap-8">
          <h2 className="text-5xl md:text-8xl font-bold leading-tight font-heading">
            Ready to <span className="text-primary italic">Fuel Up?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl">
            Join 2,000+ students who've upgraded their study game. First bottle is 50% off for new campus accounts.
          </p>
          <button className="group relative px-10 py-5 bg-white text-text-brand rounded-full font-bold text-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-white/20 shadow-2xl cursor-pointer flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            Start Your Order
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <hr className="border-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
                🍎
              </div>
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                CampusApple
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Bringing nature's best energy to the heart of campus life. Fresh, cold-pressed, and fast.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Product</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Our Juice</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Subscriptions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Eco-Bottles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Company</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Campus Partners</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Support</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Delivery Areas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} CampusAppleJuice. All rights reserved.</p>
          <p>Crafted with 🍎 for the students of the world.</p>
        </div>
      </div>
    </footer>
  )
}
