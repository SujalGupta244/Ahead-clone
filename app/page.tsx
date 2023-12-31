"use client"

// import Image from 'next/image'
import Hero from './components/hero'

import Middle from './components/middle'
import Navbar from './components/navbar'
import Levels from './components/levels'
import Footer from './components/footer'
import Carasoul from './components/ui/Carasoul'
import MiddleSec from './components/middle-sec'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carasoul/>
    <Middle/>
    <Levels/>
    <MiddleSec/>
    <Footer/>
    </>
  )
}
