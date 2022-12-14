import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import NavBar from '../components/NavBar'
import TrainingSection from '../components/Training'

const Treaning = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading='TRAINING.' text='Pre-Flight & In-Flight Training' />
      <TrainingSection />
      <Footer />
    </div>
  )
}

export default Treaning
