import React from 'react'
import {motion} from 'framer-motion'
import { ArrowRight, Smartphone, Globe, Users, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                🔥 Learn 20 Profitable Digital Skills with Just Your Smartphone!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Start Earning 6 to 7 Figures Monthly With This All-In-One Online Skills Course — No Laptop Needed!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto justify-center"
              >
                Enroll Now – Get Instant Access
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="https://wa.link/1rlzkx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto justify-center"
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left"
            >
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div className="text-2xl font-bold text-purple-400">4000+</div>
                </div>
                <div className="text-gray-400">Active Students</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Globe className="w-5 h-5 text-pink-400" />
                  <div className="text-2xl font-bold text-pink-400">20</div>
                </div>
                <div className="text-gray-400">Digital Skills</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                </div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <div className="text-2xl font-bold text-green-400">100%</div>
                </div>
                <div className="text-gray-400">Mobile Ready</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full aspect-[4/3]">
              <motion.div
                initial={{ scale: 0.9, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-6"
              ></motion.div>
              <motion.img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Digital Skills Mockup"
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
                initial={{ scale: 0.9, rotate: 5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl z-20"></div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm z-30"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full backdrop-blur-sm z-30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 