import React from 'react'
import { motion } from 'framer-motion'

const MotionComponent = ({ children, variant }) => {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.2 }}
      whileInView="onscreen"
      initial="offscreen"
      variants={variant}
    >
      {children}
    </motion.div>
  )
}

export default MotionComponent
