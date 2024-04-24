import React from 'react'

// components
import Hero from '../components/Hero'
import Services from '../components/Services'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
        <Hero/>
        <Services/>
        <Featured/>
        <Footer/>
    </>
  )
}

export default HomePage