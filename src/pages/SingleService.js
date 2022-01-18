import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Special from '../components/Special'
import Ads from '../components/Ads'
import { SectionTitle } from '../UI/Typography'

const SingleService = ({
  bannerProps,
  sectionTitleProps,
  aboutProps,
  adsProps,
}) => {
  console.log('ser')
  return (
    <div className="s-service container">
      <Banner
        bannerImg={bannerProps.bannerImg}
        title={'Website Development'}
        desc={
          'Transform your vision into a strong, efficient product. With the right product development services, your software can become your competitive advantage.'
        }
        link={bannerProps.link}
      />
      <SectionTitle className={'text-start'}>
        {sectionTitleProps[0].title}
      </SectionTitle>
      <About
        desc={aboutProps[0].desc}
        data={aboutProps[0].data}
        itemClass={'col-lg-10'}
      />
      <Ads bgImage={adsProps.bgImage} title={adsProps.title} />
      <Projects />
      <SectionTitle className={'text-start'}>
        {sectionTitleProps[1].title}
        <mark>:</mark>
      </SectionTitle>
      <About
        desc={aboutProps[1].desc}
        data={aboutProps[1].data}
        itemClass={'col-lg-6'}
      />
      <Special />
    </div>
  )
}

export default SingleService
