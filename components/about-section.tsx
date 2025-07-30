"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Phone, Clock, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: CheckCircle,
      title: "100% Client Satisfaction",
      description: "We ensure complete customer satisfaction with our quality products and services",
    },
    {
      icon: Award,
      title: "Quality is Our Culture",
      description: "Maintaining highest quality standards in all our marine and industrial products",
    },
    {
      icon: Globe,
      title: "Wide Range of Machinery",
      description: "Comprehensive selection of marine and industrial equipment for all needs",
    },
    {
      icon: Clock,
      title: "Delivery On Time",
      description: "Committed to timely delivery and efficient logistics management",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-600 font-semibold mb-4"
            >
              — ABOUT US
            </motion.p>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-4xl font-bold text-gray-800 mb-6 uppercase"
            >
               Cruzz Automation
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-gray-600 mb-8"
            >
              <p>
               Cruzz Automation is your trusted partner in industrial and marine automation — delivering powerful solutions, genuine spare parts, and technical expertise to keep your operations running at peak performance.
              </p>
              <p>
               With a passion for precision and a commitment to quality, we serve industries across the globe with products ranging from automation systems to marine tools and equipment.
              </p>
              <p>
                We enjoy the reputation of the trusted entity since the last many years, with the support of our loyal
                clients and our attitude of rendering quality goods and services to our clients.
              </p>
            </motion.div>

            {/* Features grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us Any Time</p>
                  <p className="text-lg font-semibold text-gray-800">+91 97142 52562</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/Images/img1.jpg?height=600&width=500"
                alt="Marine Industrial Equipment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Years of</p>
                  <p className="font-semibold text-gray-800">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
