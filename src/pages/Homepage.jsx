import React from 'react'
import Hero from '../components/Hero'
import FindCrypto from '../components/FindCrypto'
import ExploreWeb3 from '../components/ExploreWeb3'
import HowItWorks from '../components/HowItWorks'
import GettingStarted from '../components/GettingStarted'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Trusted from '../components/Trusted'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <FindCrypto />
      <ExploreWeb3 />
      <GettingStarted />
      <HowItWorks />
      <Faq />
      <Trusted />
      <Footer />
    </div>
  )
}

export default Homepage
