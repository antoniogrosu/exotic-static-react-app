import { useState } from 'react'
import './App.css'
import aMenu from '/Menu.svg'
import Menu from './Menu'
import Footer from './Footer'

function App() {

  const [navbar , setNavbar] = useState(true);
  function toggleNavbar(){
    setNavbar(prev => !prev)
  }

  return (
    <div className="app">
      { navbar && <nav>
          <img src={aMenu} onClick={toggleNavbar}></img>
          <h2 className="logo">Exotic Ice</h2>
      </nav>}
      { navbar == false && <Menu  clicked={toggleNavbar}/>}
      <Footer />
    </div>
  )
}

export default App
