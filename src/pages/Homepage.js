import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Special from '../components/Special'
import Projects from '../components/Projects'
import CardCarousel from '../components/Testimonials/Carousel'
import Articles from '../components/Articles'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Special />
      <Projects />
      <CardCarousel />
      <Articles title={'Recent articles'} />
    </div>
  )
}

export default HomePage
