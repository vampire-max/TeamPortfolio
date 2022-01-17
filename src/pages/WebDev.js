import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Special from '../components/Special'
import Ads from '../components/Ads'
import webbanner from '../image/web/webbanner.png'
import { SectionTitle } from '../UI/Typography'
import { webaboutItem, deliverItem } from '../data/constant'
import webads from '../image/web/webads.png'

const WebDev = () => {
  return (
    <div className="s-service container">
      <Banner
        bannerImg={webbanner}
        title={'Website Development'}
        desc={
          'Transform your vision into a strong, efficient product. With the right product development services, your software can become your competitive advantage.'
        }
        link={'Get started'}
      />
      <SectionTitle className={'text-start'}>
        Logical Roadmap & Reliable Programming
      </SectionTitle>
      <About
        desc={
          'Our software engineers, business analysts, DevOps, and product managers all work together to help our clients achieve their business goals. From the design concept to product support and maintenance, we’ll take care of the entire process every step of the way. '
        }
        data={webaboutItem}
        itemClass={'col-lg-10'}
      />
      <Ads bgImage={`url(${webads})`} title={'Ready to Grow Together?'} />
      <Projects />
      <SectionTitle className={'text-start'}>
        Deliverables<mark>:</mark>
      </SectionTitle>
      <About
        desc={
          "Here at ORIL, we're dedicated to delivering business value. That’s why we only take on projects in which we can genuinely help. We know we can do a lot for your business as a result-oriented product development partner."
        }
        data={deliverItem}
        itemClass={'col-lg-6'}
      />
      <Special />
    </div>
  )
}

export default WebDev
