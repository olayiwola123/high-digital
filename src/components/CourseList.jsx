import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Users, 
  BookOpen, 
  Video, 
  Scissors, 
  Facebook, 
  Globe, 
  PenTool,
  Youtube,
  MapPin,
  Palette,
  FileText,
  CreditCard,
  ShoppingBag,
  Settings,
  AppWindow,
  Smartphone as Mobile,
  Database,
  Sparkles
} from 'lucide-react'

const courses = [
  { icon: Smartphone, title: "SMARTPHONE VTU CREATION" },
  { icon: Users, title: "LEAD GENERATION COURSE" },
  { icon: BookOpen, title: "AMAZON BOOK PUBLISHING" },
  { icon: Video, title: "TIKTOK CRASH COURSE" },
  { icon: Scissors, title: "MOBILE VIDEO EDITING" },
  { icon: Facebook, title: "FACEBOOK ADS COURSE" },
  { icon: Globe, title: "ULTIMATE WEBSITE DESIGN" },
  { icon: PenTool, title: "BLOGGING MONETIZATION" },
  { icon: Youtube, title: "YOUTUBE ADS MASTERY" },
  { icon: MapPin, title: "GOOGLE MY BUSINESS BLUEPRINT" },
  { icon: Palette, title: "DIGITAL CREATION KIT" },
  { icon: FileText, title: "CONTENT WRITING COURSE" },
  { icon: CreditCard, title: "PAYPAL CREATION COURSE" },
  { icon: ShoppingBag, title: "MINI IMPORTATION TRAINING" },
  { icon: Settings, title: "YOUTUBE CHANNEL MANAGEMENT" },
  { icon: AppWindow, title: "1000+ PREMIUM APPS PACK" },
  { icon: Mobile, title: "MOBILE APP & GAME CREATION COURSE" },
  { icon: Palette, title: "SMARTPHONE GRAPHIC DESIGN COURSE" },
  { icon: Database, title: "ULTIMATE DATA HACK COURSE" },
  { icon: Sparkles, title: "A.I. PORTRAIT, ART & CARTOON CREATIONS" }
]

const CourseList = () => {
  return (
    <section className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          📚 Courses Included
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <course.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">{course.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CourseList 