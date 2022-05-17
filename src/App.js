import React from 'react'
import './style.css'
import NavBar from './navbar'
import Header from './header'
import Section1 from './section1'
import Midcomponent from './mid'
import Section2 from './section2'
import Section3 from './section3'
import Footer from './footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Section1 />
      <Midcomponent />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}
export default App
