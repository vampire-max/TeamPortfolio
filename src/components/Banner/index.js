import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/banner.scss'
import { Typography, H1 } from '../../UI/Typography'
import Award from '../../components/Awards'
import { logoImgOne } from '../../data/constant'

const Banner = ({ bannerImg, title, desc, link }) => {
  return (
    <div className="o-banner">
      <img src={bannerImg} className="banner_img" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <H1>
              {title}
              <mark>.</mark>
            </H1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-9">
            <Typography className="o-banner__description">{desc}</Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link
              to="/portfolio"
              className="o-btn o-btn--action o-banner_button"
            >
              {link}
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <Award logoitem={logoImgOne} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
