import Image from 'next/image'
import { Hero } from './components/Hero'
import { NavBar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Testimonials } from './components/Testimonials'
import { Goals } from './components/Goals'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Goals/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}
