import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Special from '../components/Special'
import Projects from '../components/Projects'
import CardCarousel from '../components/Testimonials/Carousel'
import banner from '../image/oril-banner-updated-1.jpg'
import Feedback from '../components/Feedback'
import { projects_data } from '../data/constant'

const HomePage = () => {
  return (
    <div className="container">
      <Banner
        bannerImg={banner}
        title={'Your go-to partner for building incredible digital products'}
        desc={
          'We help businesses win new markets with innovative solutions that disrupt industries.'
        }
        link={'View Case Study'}
      />
      <Services />
      <Special />
      <Projects projectsData={projects_data} />
      <CardCarousel />
      <Feedback />
    </div>
  )
}

export default HomePage
