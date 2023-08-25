"use client"
import Image from 'next/image'
import Hero from './components/hero'
import Carasoul from './components/ui/Carasoul'
import Middle from './components/middle'
import Navbar from './components/Navbar'
import Levels from './components/levels'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carasoul/>
    <Middle/>
    <Levels/>
    </>
  )
}
