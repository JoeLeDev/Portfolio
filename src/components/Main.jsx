import '../index.css'
import React from 'react'
import Nav from './nav'
import Hero from './hero'
import Project from './project'
import Footer from './footer'
import Experience from './experience'
import Skills from './skills'
import { SectionRefsProvider } from '../script/sectionRef'

const Main = () => {


  return (
    <div>
    &<SectionRefsProvider>
      <Nav/>
      <Hero/>
      <Experience/>
      <Project/>
      <Skills/>
      <Footer />
      </SectionRefsProvider>
    </div>
  )
}

export default Main