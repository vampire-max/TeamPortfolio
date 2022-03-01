import React from 'react'
import Projects from '../components/Projects'
import Banner from '../components/Banner'
import designBanner from '../image/uxdesign/ux design.png'
import { approachItem, planningItem } from '../data/constant'
import { SectionTitle } from '../UI/Typography'
import schema from '../image/uxdesign/schema1.png'
import About from '../components/About'
import { designAboutItem } from '../data/constant'
import Ads from '../components/Ads'
import adsBanner from '../image/ads-banner.png'

const Design = () => {
  const isMobile = window.innerWidth < 768

  return (
    <div className="s-service">
      <Banner
        bannerImg={designBanner}
        title={'Product Design'}
        desc={
          'Great ideas attract users, but thoughtful designs make them stay. We create products your customers will love.'
        }
        link={'Get started'}
      />
      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-12">
              <SectionTitle className={'text-start'}>Why Us?</SectionTitle>
              <About
                desc={
                  ' The user is the superstar of every product we work on. They are always at the center of our efforts. We create super-functional, refined, and engaging products that meet and exceed expectations.'
                }
                data={designAboutItem}
                itemClass={'col-lg-10'}
              />
            </div>
          </div>
        </div>
        <div className="d-approach">
          <SectionTitle>Design-thinking approach</SectionTitle>
          <p className="desc text-start">
            Design thinking brings together what’s in the best interest of users
            and what’s technically and economically feasible. It can change the
            way companies operate at every level, from developing strategies to
            creating full-blown solutions. We apply design thinking to build and
            implement all kinds of successful products for our clients.
          </p>
          {approachItem.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div className="row d-approach-item" key={index}>
                  <div className="col-lg-5 col-md-6">
                    <img src={item.image} />
                  </div>
                  <div className="col-lg-6 offset-lg-1 col-md-6">
                    <h3 className="item-title">
                      <span>{item.id}</span>
                      {item.title}
                      <mark>.</mark>
                    </h3>
                    <div className="item-desc">
                      <p>{item.desc}</p>
                      <ul>
                        {item.list.map((tag, idx) => (
                          <li key={idx}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                className={`row d-approach-item ${
                  isMobile && 'flex-column-reverse'
                }`}
                key={index}
              >
                <div className="col-lg-5 col-md-6">
                  <h3 className="item-title">
                    <span>{item.id}</span>
                    {item.title}
                    <mark>.</mark>
                  </h3>
                  <div className="item-desc">
                    <p>{item.desc}</p>
                    <ul>
                      {item.list.map((tag, idx) => (
                        <li key={idx}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-6">
                  <img src={item.image} />
                </div>
              </div>
            )
          })}
        </div>
        <div className="o-how">
          <SectionTitle>How it works?</SectionTitle>
          <img src={schema} />
        </div>
        <div className="o-planning">
          <SectionTitle>Other planning processes</SectionTitle>
          <div className="row">
            <div className="col-lg-11">
              {planningItem.map((item, index) => (
                <div className="planning-item" key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <ul>
                    {item.list.map((tag, idx) => (
                      <li key={idx}>{tag}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Ads bgImage={`url(${adsBanner})`} title={'Got an Idea?'} />
        <Projects />
      </div>
    </div>
  )
}

export default Design
