import React from 'react'
import '../styles/banner.scss'
import banner from '../image/oril-banner-updated-1.jpg'

import { Typography, H1 } from '../UI/Typography'
import Award from './award'

const Banner = () => {
  return (
    <div className="o-banner">
      <img src={banner} className="banner_img" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <H1 className="o-banner__title mark-wrapper">
              Your go-to partner for&nbsp;building incredible digital products
              <mark>.</mark>
            </H1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-9">
            <Typography className="o-banner__description">
              We help businesses win new markets with innovative solutions that
              disrupt industries.
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a
              href="https://oril.co/portfolio"
              className="o-btn o-btn--action o-banner_button"
              target="blank"
            >
              View Case Study
            </a>
          </div>
        </div>
        <Award />
      </div>
    </div>
  )
}

export default Banner
