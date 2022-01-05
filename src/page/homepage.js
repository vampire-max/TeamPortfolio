import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Service from '../components/service/service'
import Special from '../components/special'
import Projects from '../components/projects'
import Test from '../components/test'
import Articles from '../components/articles'
import Feedback from '../components/feedback'
import Footer from '../components/Footer'
import CardCarousel from '../components/Testimonials/Carousel'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Special />
      <Projects />
      <Test />
      <Articles />
      <CardCarousel />
      <Feedback />
      <Footer />
    </div>
  )
}

export default HomePage
