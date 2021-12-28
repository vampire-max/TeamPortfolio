import React from 'react'
import '../styles/banner.scss'
import banner from '../image/oril-banner-updated-1.jpg'
import logo1 from '../image/logos/logo1.png'
import logo1_2 from '../image/logos/logo1_2.png'
import logo2 from '../image/logos/logo2.png'
import logo2_2 from '../image/logos/logo2_2.png'
import logo3 from '../image/logos/logo3.png'
import logo3_2 from '../image/logos/logo3_2.png'
import logo4 from '../image/logos/logo4.png'
import logo4_2 from '../image/logos/logo4_2.png'
import { Typography, H1 } from '../UI/Typography'

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
              target=""
            >
              View Case Study
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="o-banner__awards">
              <div className="o-banner__awards-item">
                <a href="https://clutch.co/profile/oril" target="_blank">
                  <img src={logo1_2} alt="clutch-1" />
                  <img className="active" src={logo1} alt="clutch-1" />
                </a>
              </div>
              <div className="o-banner__awards-item">
                <a
                  href="https://www.upwork.com/o/companies/~0165fed1df7da21a1d/"
                  target="_blank"
                >
                  <img src={logo2_2} alt="upwork-2-1" />
                  <img className="active" src={logo2} alt="upwork-2-1" />
                </a>
              </div>
              <div className="o-banner__awards-item">
                <a href="https://youteam.io/partners/oril-inc" target="_blank">
                  <img src={logo3_2} alt="You team" />
                  <img className="active" src={logo3} alt="You team" />
                </a>
              </div>
              <div className="o-banner__awards-item">
                <a href="https://jobs.dou.ua/companies/oril/" target="_blank">
                  <img src={logo4_2} alt="DOU" />
                  <img className="active" src={logo4} alt="DOU" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
