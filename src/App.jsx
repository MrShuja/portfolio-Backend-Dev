
import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Testimonial from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="pt-12">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
