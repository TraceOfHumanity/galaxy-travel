import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import NavBar from '../components/NavBar'
import PricingCards from '../components/PricingCards'

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading='PRICING.' text='Chose youe trip' />
      <PricingCards />
      <Footer />
    </div>
  )
}
export default Pricing
