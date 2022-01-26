import React from 'react'
import Services from '../components/Services'
import '../styles/aboutUs.scss'
import aboutUsBanner1 from '../image/about/about-banner1.png'
import aboutUsBanner2 from '../image/about/about-banner2.png'
import { SectionTitle } from '../UI/Typography'
import TeamSlider from '../components/TeamSlider'

const AboutUs = () => {
  return (
    <div className="about-us container">
      <div className="about-us-banner">
        <img src={aboutUsBanner1} className="banner-up" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-2">
              <img src={aboutUsBanner2} className="banner-img" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="o-about-us-team">
        <SectionTitle>
          Who we are<mark>?</mark>
        </SectionTitle>
        <p className="desc">
          We are a diverse team of professionals who are passionate about
          digital products.
        </p>
        <h3 className="team-sub-title">Our Credo</h3>
        <p className="sub-desc">Increasing World Efficient</p>
        <TeamSlider />
      </div>
      <div></div>
    </div>
  )
}

export default AboutUs
