import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingData = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    price: "₦2,900",
    currency: "NGN",
    paymentLink: "https://selar.com/a827g7"
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    price: "GHS 26",
    currency: "GHS",
    paymentLink: "https://selar.com/a827g7"
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    price: "KSh 244",
    currency: "KES",
    paymentLink: "https://selar.com/a827g7"
  },
  {
    country: "Cameroon",
    flag: "🇨🇲",
    price: "FCFA 1,089",
    currency: "XAF",
    paymentLink: "https://selar.com/a827g7"
  }
]

const features = [
  "Lifetime access to all courses",
  "Smartphone-friendly content",
  "No tech skills required",
  "Earn from anywhere",
  "24/7 support access",
  "Regular updates"
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Choose Your Country's Price
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{item.flag}</div>
                <h3 className="text-xl font-bold">{item.country}</h3>
                <div className="text-3xl font-bold text-purple-400 mt-2">{item.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={item.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400"
        >
          <p>For other countries, please contact us via WhatsApp for payment details</p>
          <a 
            href="https://wa.link/1rlzkx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline mt-2 inline-block"
          >
            Contact on WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Pricing 