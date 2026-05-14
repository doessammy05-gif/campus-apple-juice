'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface WindowContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export function WindowContainer({
  children,
  className,
  ...props
}: WindowContainerProps) {
  return (
    <motion.div
      style={{
        boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`max-w-5xl -mt-12 mx-auto h-auto min-h-[30rem] md:min-h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl ${className}`}
      {...props}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:p-4">
        {children}
      </div>
    </motion.div>
  )
}
