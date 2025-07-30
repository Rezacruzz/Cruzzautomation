"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const brands = [
  {
    id: 1,
    name: "Wartsila",
    logo: "/placeholder.svg?height=80&width=160&text=Wartsila",
    category: "Engine & Power Systems",
    rating: 4.9,
    established: "1834",
    country: "Finland",
    isPartner: true,
    description: "Leading provider of marine and energy solutions",
  },
  {
    id: 2,
    name: "MAN Energy Solutions",
    logo: "/placeholder.svg?height=80&width=160&text=MAN+Energy",
    category: "Marine Engines",
    rating: 4.8,
    established: "1758",
    country: "Germany",
    isPartner: true,
    description: "World-leading provider of large-bore diesel engines",
  },
  {
    id: 3,
    name: "Caterpillar Marine",
    logo: "/placeholder.svg?height=80&width=160&text=Caterpillar",
    category: "Marine Equipment",
    rating: 4.7,
    established: "1925",
    country: "USA",
    isPartner: false,
    description: "Comprehensive marine power solutions",
  },
  {
    id: 4,
    name: "Rolls-Royce Marine",
    logo: "/placeholder.svg?height=80&width=160&text=Rolls+Royce",
    category: "Propulsion & Navigation",
    rating: 4.9,
    established: "1906",
    country: "UK",
    isPartner: true,
    description: "Advanced marine technology solutions",
  },
  {
    id: 5,
    name: "Kongsberg Maritime",
    logo: "/placeholder.svg?height=80&width=160&text=Kongsberg",
    category: "Navigation & Automation",
    rating: 4.8,
    established: "1814",
    country: "Norway",
    isPartner: true,
    description: "Leading provider of marine technology",
  },
  {
    id: 6,
    name: "Furuno",
    logo: "/placeholder.svg?height=80&width=160&text=Furuno",
    category: "Marine Electronics",
    rating: 4.7,
    established: "1948",
    country: "Japan",
    isPartner: false,
    description: "World-renowned marine electronics manufacturer",
  },
  {
    id: 7,
    name: "Alfa Laval",
    logo: "/placeholder.svg?height=80&width=160&text=Alfa+Laval",
    category: "Marine Systems",
    rating: 4.8,
    established: "1883",
    country: "Sweden",
    isPartner: true,
    description: "Specialized in heat transfer and fluid handling",
  },
  {
    id: 8,
    name: "Sperry Marine",
    logo: "/placeholder.svg?height=80&width=160&text=Sperry",
    category: "Navigation Systems",
    rating: 4.6,
    established: "1910",
    country: "UK",
    isPartner: false,
    description: "Leading manufacturer of marine navigation systems",
  },
  {
    id: 9,
    name: "Danfoss",
    logo: "/placeholder.svg?height=80&width=160&text=Danfoss",
    category: "Marine Controls",
    rating: 4.7,
    established: "1933",
    country: "Denmark",
    isPartner: true,
    description: "Advanced control solutions for marine applications",
  },
]

export function BrandsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(brands.length / 4))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(brands.length / 4))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(brands.length / 4)) % Math.ceil(brands.length / 4))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

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
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-semibold">TRUSTED PARTNERS</span>
          </div>
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
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Group brands into slides of 4 */}
              {Array.from({ length: Math.ceil(brands.length / 4) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {brands.slice(slideIndex * 4, slideIndex * 4 + 4).map((brand, index) => (
                      <motion.div
                        key={brand.id}
                        initial={{ y: 30, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                      >
                        {/* Brand Logo Section */}
                        <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                          <img
                            src={brand.logo || "/placeholder.svg"}
                            alt={`${brand.name} logo`}
                            className="w-full h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                          />

                          {/* Partner Badge */}
                          {brand.isPartner && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                                <Award className="w-3 h-3 mr-1" />
                                Partner
                              </Badge>
                            </div>
                          )}

                          {/* Rating */}
                          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium text-gray-700">{brand.rating}</span>
                          </div>
                        </div>

                        {/* Brand Info */}
                        <div className="p-4">
                          <h3 className="font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300 text-sm">
                            {brand.name}
                          </h3>
                          <p className="text-xs text-gray-500 mb-2">{brand.category}</p>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{brand.description}</p>

                          {/* Brand Details */}
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{brand.country}</span>
                            <span>Est. {brand.established}</span>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-all duration-300 pointer-events-none" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-indigo-600 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-indigo-600 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(brands.length / 4) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-indigo-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">{brands.length}+</div>
            <div className="text-gray-600 text-sm">Global Brands</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">{brands.filter((b) => b.isPartner).length}</div>
            <div className="text-gray-600 text-sm">Official Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8">
            View All Brands
            <Award className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
