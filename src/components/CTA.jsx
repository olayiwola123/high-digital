import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Smartphone, Zap, Globe } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join thousands of successful students who have already started their journey to financial freedom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">No risk – only results!</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Smartphone className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Perfect for beginners</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Instant access</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Globe className="w-6 h-6 text-pink-400" />
                <span className="text-gray-300">Learn from anywhere</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto justify-center"
              >
                Get Started Now
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
          </motion.div>

          {/* Right Content - Image Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full aspect-[4/3]">
              <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Success Story Mockup"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              
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
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm"
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full backdrop-blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 