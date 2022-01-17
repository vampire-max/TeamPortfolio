import React from 'react'
import Projects from '../components/Projects'
import Banner from '../components/Banner'
import designBanner from '../image/uxdesign/ux design.png'
import { aboutItem } from '../data/constant'

const Design = () => {
  return (
    <div className="design">
      <Banner
        bannerImg={designBanner}
        title={'Product Design'}
        desc={
          'Great ideas attract users, but thoughtful designs make them stay. We create products your customers will love.'
        }
        link={'Get started'}
      />
      <div className="d-about">
        <div className="row">
          <div className="col-12">
            <h2 className="title">Why Us? </h2>
          </div>
          <div className="col-md-11">
            <p>
              The user is the superstar of every product we work on. They are
              always at the center of our efforts. We create super-functional,
              refined, and engaging products that meet and exceed expectations.
            </p>
          </div>
          <div className="col-lg-10">
            {aboutItem.map((item, index) => {
              return (
                <div className="about-item">
                  <img src={item.img} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default Design
