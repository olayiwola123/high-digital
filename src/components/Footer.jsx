import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              20-in-1 Digital Skills
            </h3>
            <p className="text-gray-400">
              Your all-in-one solution for learning profitable digital skills. Start earning from your smartphone today!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://wa.link/1rlzkx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://selar.com/a827g7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Enroll Now
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.link/1rlzkx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@20in1digitalskills.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href="https://selar.com/a827g7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Payment Portal
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} 20-in-1 Digital Skills. All rights reserved.</p>
          <p className="mt-2">Perfect for beginners. No laptop needed — just your phone!</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 