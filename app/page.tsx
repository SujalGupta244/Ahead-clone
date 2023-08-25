// "use client"

// import Image from 'next/image'
import Hero from './components/hero'

import Middle from './components/middle'
import Navbar from './components/navbar'
import Levels from './components/levels'
import {Carasoul} from './components/ui/carasoul'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carasoul/>
    <Middle/>
    <Levels/>
    <Footer/>
    </>
  )
}
