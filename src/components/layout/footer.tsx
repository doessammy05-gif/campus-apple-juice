'use client'

import { ShoppingCart, Camera, Share2, Users } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/fade-in'

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
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-24 gap-8">
            <h2 className="text-5xl md:text-8xl font-bold leading-tight font-heading">
              Ready to <span className="text-primary italic">Fuel Up?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl">
              Join 2,000+ students who've upgraded their study game. First bottle is 50% off for new campus accounts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-text-brand rounded-full font-bold text-2xl transition-all hover:shadow-white/20 shadow-2xl cursor-pointer flex items-center gap-3"
            >
              <ShoppingCart className="w-6 h-6" />
              Start Your Order
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </FadeIn>

        <hr className="border-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl"
              >
                🍎
              </motion.div>
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                CampusApple
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Bringing nature's best energy to the heart of campus life. Fresh, cold-pressed, and fast.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: "#FB7185" }}
                className="p-2 bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <Camera className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: "#FB7185" }}
                className="p-2 bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <Share2 className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: "#FB7185" }}
                className="p-2 bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <Users className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-6 font-heading">Product</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Our Juice
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Pricing
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Subscriptions
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Eco-Bottles
                </motion.a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-6 font-heading">Company</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Our Story
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Campus Partners
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Careers
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-6 font-heading">Support</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Delivery Areas
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  FAQs
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Refund Policy
                </motion.a>
              </li>
              <li className="group">
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FB7185" }}
                  className="transition-colors cursor-pointer"
                >
                  Privacy
                </motion.a>
              </li>
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
