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
import WebDev from './pages/WebDev'
import MobileDev from './pages/MobileDev'
import GameDev from './pages/GameDev'
import Blockchain from './pages/Blockchain'

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
          <Route path="/service/website-development" element={<WebDev />} />
          <Route
            path="/service/mobile-app-development"
            element={<MobileDev />}
          />
          <Route path="/service/game-development" element={<GameDev />} />
          <Route
            path="/service/blockchain-development"
            element={<Blockchain />}
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
