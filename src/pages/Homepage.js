import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Special from '../components/Special'
import Projects from '../components/Projects'
import CardCarousel from '../components/Testimonials/Carousel'
import Articles from '../components/Articles'
import banner from '../image/oril-banner-updated-1.jpg'
import { logoImgOne } from '../data/constant'
import Award from '../components/Awards'

const HomePage = () => {
  return (
    <div>
      <Banner
        bannerImg={banner}
        title={'Your go-to partner for building incredible digital products'}
        desc={
          'We help businesses win new markets with innovative solutions thatdisrupt industries.'
        }
        link={'View Case Study'}
      />
      <div className="row">
        <div className="col-lg-7">
          <Award logoitem={logoImgOne} />
        </div>
      </div>
      <Services />
      <Special />
      <Projects />
      <CardCarousel />
      <Articles title={'Recent articles'} />
    </div>
  )
}

export default HomePage
