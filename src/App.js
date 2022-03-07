import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Design from './pages/Design'
import SingleService from './pages/SingleService'
import { singleServiceData } from './data/constant'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service/ux-design" element={<Design />} />
          {singleServiceData.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <SingleService
                  bannerProps={item.banner}
                  sectionTitleProps={item.sectionTitle}
                  aboutProps={item.about}
                  adsProps={item.ads}
                  projectsDataProps={item.projectData}
                />
              }
            />
          ))}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
