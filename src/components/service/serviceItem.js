import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/service.scss'

const ServiceItem = ({ item, index, direction }) => {
  const variants_right = {
    offscreen: {
      x: '-100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
  }

  const variants_left = {
    offscreen: {
      x: '100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
  }

  return (
    <motion.div
      viewport={{ once: true, amount: 0.2 }}
      whileInView="onscreen"
      initial="offscreen"
      key={index}
      variants={index % 2 === 0 ? variants_right : variants_left}
      className="col-md-6 service-item"
    >
      <img
        className="item-img mb-24"
        src={item.img}
        alt={`Our Service ${index}`}
      />
      <h3 className="item-title mb-24">{item.name}</h3>

      <p className="item-desc">{item.desc}</p>

      <a className="learnMore" href="/">
        Learn more
      </a>
    </motion.div>
  )
}

export default ServiceItem
