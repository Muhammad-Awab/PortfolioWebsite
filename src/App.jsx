import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import About from './components/about/About'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
