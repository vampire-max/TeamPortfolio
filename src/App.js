import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import ServicePage from './pages/Service'
import Expertise from './pages/Expertise'
import Design from './pages/Design'
import SingleService from './pages/SingleService'
import {
  webBanner,
  webSectionTitle,
  webAbout,
  webAds,
  webProgressData,
  gameBanner,
  gameSectionTitle,
  gameAbout,
  gameAds,
  mobileBanner,
  mobileSectionTitle,
  mobileAbout,
  mobileAds,
  blockChainBanner,
  blockChainSectionTitle,
  blockChainAbout,
  blockChainAds,
} from './data/constant'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service/ux-design" element={<Design />} />
          <Route
            path="/service/website-development"
            element={
              <SingleService
                bannerProps={webBanner}
                sectionTitleProps={webSectionTitle}
                aboutProps={webAbout}
                adsProps={webAds}
                progressData={webProgressData}
              />
            }
          />

          <Route
            path="/service/game-development"
            element={
              <SingleService
                bannerProps={gameBanner}
                sectionTitleProps={gameSectionTitle}
                aboutProps={gameAbout}
                adsProps={gameAds}
              />
            }
          />

          <Route
            path="/service/mobile-app-development"
            element={
              <SingleService
                bannerProps={mobileBanner}
                sectionTitleProps={mobileSectionTitle}
                aboutProps={mobileAbout}
                adsProps={mobileAds}
              />
            }
          />

          <Route
            path="/service/blockchain-development"
            element={
              <SingleService
                bannerProps={blockChainBanner}
                sectionTitleProps={blockChainSectionTitle}
                aboutProps={blockChainAbout}
                adsProps={blockChainAds}
              />
            }
          />

          <Route path="/blog" element={<Expertise />} />
        </Routes>
        <Feedback />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
