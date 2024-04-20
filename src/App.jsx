import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/views/Home'
import Pokemones from './assets/views/Pokemones'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />          
      </Routes>
      </Router>
    </>
  )
}

export default App
