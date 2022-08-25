import React from 'react'
import Header from './component/head/Header'
import Hero from './component/hero/Hero'
import Features from './component/Features/Features'
import Resume  from './component/Resume/Resume'
import Testimonial from './component/Testimonial/Testimonal'
import Contact from './component/Contact/Contact'
import Protfolio from './component/Protfolio/Protfolio'
import Footer from './component/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <Protfolio/>
    <Resume/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  
    </>
     )
}

export default App