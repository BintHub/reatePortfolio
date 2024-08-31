import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contributors from './Components/Contributors/Contributors'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
    <div className='background'>
    <Header/>
    <About/>
    <Services/>
    <Contributors/>
    <Portfolio/>
    <Contact/>
    </div>
    </>
  )
}

export default App
