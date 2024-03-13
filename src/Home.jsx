import React from 'react'
import FirstSection from './Components/FirstSection'
import Cards from './Components/Cards'
import Contributions from './Components/Contributions'
import Section from './Components/Section'
import FinalSection from './Components/FinalSection'

function Home() {
  return (
    <div>
        <FirstSection/>
        <Cards/>
        <Contributions/>
        <Section/>
        <FinalSection/>
    </div>
  )
}

export default Home