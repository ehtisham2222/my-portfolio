import React from 'react'
import Header from '../layout/header/header'
import Hero from '../layout/hero/hero'
import About from '../layout/about/about'
import Projects from '../layout/projects/projects'
import Footer from '../layout/footer/footer'

function Home() {
  return (
    <div className='w-full bg-[#0D0D0D]'>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home