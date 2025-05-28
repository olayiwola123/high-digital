import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/1rlzkx', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-64"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold">Chat with us!</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Have questions? We're here to help! Click below to chat with us on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Open WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
        
        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15
          }}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
        >
          1
        </motion.div>

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </div>
  )
}

export default WhatsAppButton 