import React from 'react'
import Banner from '../components/Banner'
import Position from '../components/Position'
import careerBanner from '../image/careers/careers-banner.png'
import '../styles/careers.scss'
import { SectionTitle } from '../UI/Typography'
import { careersData, benefitData } from '../data/constant'

const Careers = () => {
  return (
    <div className="o-careers">
      <Banner
        bannerImg={careerBanner}
        title={'Build  a great career  with DreamHighTech'}
        desc={
          "With DreamHighTech you can reveal your full potential, collaborate with open-minded colleagues, build and deliver challenging products. Let's create together!"
        }
      />
      <div className="container">
        <Position />
        <div className="o-careers-about">
          <SectionTitle>Build your career with DreamHighTech</SectionTitle>
          {careersData.map((item, index) => (
            <div
              className={`row about-item ${
                index % 2 === 0 && 'flex-row-reverse'
              }`}
              key={index}
            >
              <div className="col-md-6">
                <h3 className="item-title mb-24">{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={item.img}
                  className={index % 2 === 0 ? 'left-img' : 'right-img'}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="o-benefit">
          <div className="row">
            {benefitData.map((item, index) => (
              <div className="col-lg-4 col-md-6 benefit-item" key={index}>
                <img src={item.img} />
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
