import React from 'react'
import Hero from '../components/Hero'
import Line from '../components/Line'
import Intro from '../components/Intro'
import HomePageSkills from "../components/HomePageSkills"
import Education from '../components/Education'

const Home = () => {
  return (
    <section>
      <Hero/>
      <Line/>
      <Intro/>
      <Line/>
      <HomePageSkills/>
      <Line/>
      <Education/>
      <Line/>
    </section>
  )
}

export default Home
