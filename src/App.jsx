import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Speakers from './pages/Speakers'
import InnovationsExpo from './pages/InnovationsExpo'
import About from './pages/About'
import Team from './pages/Team'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main style={{ paddingTop: 99 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/innovations-expo" element={<InnovationsExpo />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
    </HashRouter>
  )
}
