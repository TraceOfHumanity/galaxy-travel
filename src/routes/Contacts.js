import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

function Contacts() {
  return (
    <div>
      <NavBar />
      <HeroImg heading='CONTACT.' text='contact GLX Travel' />
      <Form />
      <Footer />
    </div>
  )
}

export default Contacts
