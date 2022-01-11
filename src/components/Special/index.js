import React, { useState } from 'react'
import { SectionTitle, Typography } from '../../UI/Typography'
import '../../styles/special.scss'
import { AnimatePresence, motion } from 'framer-motion'
import sp1 from '../../image/special/special1.png'
import sp2 from '../../image/special/special2.png'
import sp3 from '../../image/special/special3.png'
import sp4 from '../../image/special/special4.png'
import Slider from 'react-slick'
import SpecialCard from './specialCard'

const Special = () => {
  const specializeItem = [
    {
      title: 'PropTech',
      desc:
        'Given the pace of technology development, innovation in real estate is long overdue. Everything about owning, leasing, property management, and even navigating upfront government hurdles should become easier, both for owners and tenants. We help businesses lead new ways in the Real Estate industry.',
      image: sp1,
    },
    {
      title: 'FinTech',
      desc:
        "Whether it's consumer banking, commercial lending, or trading, startups are taking over every industry imaginable. Having worked on multiple financial services over the years, we are happy to bring our expertise to your team.",
      image: sp2,
    },
    {
      title: 'Marketplace',
      desc:
        'ORIL develops engaging online marketplace platforms that drive traffic, boost conversion, and increase sales. We build high-quality, scalable, and successful platforms that your users will love.',
      image: sp3,
    },
    {
      title: 'Health & Fitness',
      desc:
        "Medical professionals are slowly embracing technology in their practice. The general public is also waking up to the importance of staying healthy. Now is the best time to tap into this niche. ORIL team develops interactive, creative, secure, and HIPAA compliant solutions that fulfill people's needs in healthcare, fitness, and lifestyle.",
      image: sp4,
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [selectedItem, setSelectedItem] = useState(specializeItem[0])

  return (
    <div id="o_special" className="o-special section">
      <SectionTitle>
        We Specialize in
        <mark>:</mark>
      </SectionTitle>
      <div className="container">
        <div className="desktop-mod">
          <div className="o_special_nav">
            {specializeItem.map((item, index) => (
              <li
                key={index}
                className={`o_special_nav_item ${
                  item.title === selectedItem.title ? 'active' : ''
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item.title}
              </li>
            ))}
          </div>
          <div className="o_special_wrapper">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedItem.title ? selectedItem.title : 'empty'}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.15 }}
              >
                <div className="o_special_item">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="o_special_item_title"></h3>
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="o-special_item_img"
                      />
                    </div>
                    <div className="col-md-6">
                      <Typography className="o_special_item_desc">
                        {selectedItem.desc}
                      </Typography>
                      <a className="o-btn o-btn-primary o_special_item_btn">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="container-fluid mobile-mod">
        <Slider {...settings}>
          {specializeItem.map((item, index) => (
            <SpecialCard item={item} key={index} />
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="o-divider o-special-divider"></div>
      </div>
    </div>
  )
}

export default Special
