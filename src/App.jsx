import { useState } from 'react'
import './App.css'
import aMenu from '/Menu.svg'
import Menu from './Menu'
import Footer from './Footer'
import Hero from './Hero'
import Collage from './Collage'

function App() {

  const [navbar , setNavbar] = useState(true);
  function toggleNavbar(){
    setNavbar(prev => !prev)
  }

  return (
    <div className="app">
      { navbar && <nav>
          <h2 className="logo">Exotic Ice</h2>
          <img src={aMenu} onClick={toggleNavbar}></img>
      </nav>}
      { navbar == false && <Menu  clicked={toggleNavbar}/>}
      <Hero />
      <Collage />
      <Footer/>
    </div>
  )
}

export default App
