import { useState } from 'react'
import './App.css'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Format from './components/Format'
import Getplaced from './components/Getplaced'
import Graduate from './components/Graduate'
import Help from './components/Help'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'

function App() {

  const [menu,setMenu] = useState(false);

  function handlMenuOpen(){
    setMenu(true);
  }
  function handleMenuClose(){
    setMenu(false);
  }

  return (
    <div>
      <Navbar open={handlMenuOpen}/>
      {menu && <Menu close={handleMenuClose}/>}
      <main className="main">
        <Hero/>
        <Format/>
        <Courses/>
        <Help/>
        <Getplaced/>
        <Graduate/>
        <Testimonial/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
