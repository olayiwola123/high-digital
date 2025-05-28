import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah K.",
    country: "Nigeria",
    text: "This course bundle changed my life! I started earning from my smartphone within weeks. The VTU creation course alone paid for my investment.",
    rating: 5
  },
  {
    name: "Michael O.",
    country: "Ghana",
    text: "The best investment I've made in my digital career. The courses are well-structured and easy to follow. I'm now running multiple income streams!",
    rating: 5
  },
  {
    name: "Linda M.",
    country: "Kenya",
    text: "I was skeptical at first, but the results speak for themselves. The support team is amazing, and the bonuses are worth every penny!",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            What Our Students Say
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.country}</div>
                </div>
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
          <p className="text-2xl font-bold text-purple-400">4000+ Students Already Learning!</p>
          <p className="text-gray-400 mt-2">Join our growing community of successful digital entrepreneurs</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials 