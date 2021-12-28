import React from 'react'
import Banner from '../components/banner'
import Header from '../components/header'
import Projects from '../components/projects'
import Service from '../components/service/service'
import Special from '../components/special'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Special />
      {/* <Projects /> */}
    </div>
  )
}

export default HomePage
