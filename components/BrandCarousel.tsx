"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const brands = [
  { id: 1, name: "MAN Energy Solutions", logo: "/assets/Brands/brand1.jpeg" },
  { id: 2, name: "Honeywell", logo: "/assets/Brands/brand2.jpeg" },
  { id: 3, name: "OMRON", logo: "/assets/Brands/brand3.jpeg" },
  { id: 4, name: "Schneider Electric", logo: "/assets/Brands/brand4.jpeg" },
  { id: 5, name: "ABB", logo: "/assets/Brands/brand5.jpeg" },
  { id: 6, name: "Rexroth", logo: "/assets/Brands/brand6.jpeg" },
  { id: 7, name: "GE", logo: "/assets/Brands/brand7.jpeg" },
  { id: 8, name: "Rolls-Royce", logo: "/assets/Brands/brand8.jpeg" },
  { id: 9, name: "Emerson", logo: "/assets/Brands/brand9.jpeg" },
  { id: 10, name: "Siemens", logo: "/assets/Brands/brand10.jpeg" },
]

export function BrandCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Duplicate brands to create a seamless infinite scroll effect
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Brand Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with world-leading marine and industrial equipment manufacturers to bring you the highest
            quality products and cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl py-4"
        >
          {/* Carousel Wrapper for infinite scroll */}
          <div className="flex flex-nowrap animate-infinite-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`} // Use a unique key for duplicated items
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4" // Adjust width for number of visible items
              >
                <div className="group bg-white rounded-xl shadow-md flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
