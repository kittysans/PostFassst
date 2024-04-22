import React from 'react'

// components
import Hero from '../components/Hero'
import Services from '../components/Services'
import Featured from '../components/Featured'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Services/>
        <Featured/>
    </div>
  )
}

export default HomePage