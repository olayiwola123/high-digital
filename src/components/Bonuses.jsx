import React from 'react'
import { motion } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

const bonuses = [
  "CHATGPT MONETIZATION",
  "DIGITAL MARKETING BLUEPRINT",
  "SELAR A.I. INTEGRATION COURSE",
  "COPYWRITING COURSE",
  "SELL LIKE A PRO COURSE",
  "HACKED MOVIE APPS"
]

const Bonuses = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Gift className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              🎁 Exclusive Bonuses
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Get these amazing bonuses absolutely FREE when you enroll today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">{bonus}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            These bonuses are valued at over $500, but you'll get them FREE with your enrollment!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Bonuses 