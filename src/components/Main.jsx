import '../index.css'
import React from 'react'
import Nav from './nav'
import Hero from './hero'
import Project from './project'
import Footer from './footer'
import Experience from './experience'
import { SectionRefsProvider } from '../script/sectionRef'

const Main = () => {


  return (
    <div>
    &<SectionRefsProvider>
      <Nav/>
      <Hero/>
      <Experience/>
      <Project/>
      <Footer />
   
      </SectionRefsProvider>
    </div>
  )
}

export default Main