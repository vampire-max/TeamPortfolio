import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Ads from '../components/Ads'
import { SectionTitle } from '../UI/Typography'
import ServiceSlider from '../components/Slider'

const SingleService = ({
  bannerProps,
  sectionTitleProps,
  aboutProps,
  progressData,
  adsProps,
  projectsDataProps,
}) => {
  return (
    <div className="s-service">
      <Banner
        bannerImg={bannerProps.bannerImg}
        title={bannerProps.title}
        desc={bannerProps.desc}
        link={bannerProps.link}
      />
      <div className="container">
        <SectionTitle className={'text-start'}>
          {sectionTitleProps[0].title}
        </SectionTitle>
        <About
          desc={aboutProps[0].desc}
          data={aboutProps[0].data}
          itemClass={'col-lg-10'}
        />
        {/* <ServiceSlider progressData={progressData} /> */}
        <Ads bgImage={adsProps.bgImage} title={adsProps.title} />
        <Projects hasSecond projectsData={projectsDataProps} />
        <SectionTitle className={'text-start'}>
          {sectionTitleProps[1].title}
          <mark>:</mark>
        </SectionTitle>
        <About
          desc={aboutProps[1].desc}
          data={aboutProps[1].data}
          itemClass={'col-lg-6'}
        />
      </div>
    </div>
  )
}

export default SingleService
