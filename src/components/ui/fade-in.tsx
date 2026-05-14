'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  ...props
}: FadeInProps) {
  const offsets = {
    up: [0, 20],
    down: [0, -20],
    left: [20, 0],
    right: [-20, 0]
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0, x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.215, 0.61, 0.345, 1]
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
