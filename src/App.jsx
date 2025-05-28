import React from 'react'
import './index.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import CourseList from './components/CourseList'
import Pricing from './components/Pricing'
import Bonuses from './components/Bonuses'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <CourseList />
        <Pricing />
        <Bonuses />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
