import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import ServicePage from './pages/Service'
import Expertise from './pages/Expertise'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
        <Feedback />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
