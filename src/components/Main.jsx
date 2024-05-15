import '../index.css'
import React from 'react'
import Nav from './nav'
import Hero from './hero'
import Project from './project'
import Footer from './footer'
import Experience from './experience'

const Main = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Experience/>
      <Project/>
      <Footer />
    </div>
  )
}

export default Main