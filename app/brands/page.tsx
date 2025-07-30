"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Star, Award, Globe, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const brands = [
  {
    id: 1,
    name: "Wartsila",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Engine & Power Systems",
    description: "Leading provider of marine and energy solutions with advanced engine technology",
    products: ["Marine Engines", "Power Plants", "Propulsion Systems"],
    rating: 4.9,
    established: "1834",
    country: "Finland",
    isPartner: true,
  },
  {
    id: 2,
    name: "MAN Energy Solutions",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Marine Engines",
    description: "World-leading provider of large-bore diesel engines and turbomachinery",
    products: ["Two-Stroke Engines", "Four-Stroke Engines", "Turbochargers"],
    rating: 4.8,
    established: "1758",
    country: "Germany",
    isPartner: true,
  },
  {
    id: 3,
    name: "Caterpillar Marine",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Marine Equipment",
    description: "Comprehensive marine power solutions and equipment for commercial vessels",
    products: ["Marine Engines", "Generators", "Propulsion Systems"],
    rating: 4.7,
    established: "1925",
    country: "USA",
    isPartner: false,
  },
  {
    id: 4,
    name: "Rolls-Royce Marine",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Propulsion & Navigation",
    description: "Advanced marine technology including propulsion and ship intelligence systems",
    products: ["Azipod Propulsion", "Navigation Systems", "Automation"],
    rating: 4.9,
    established: "1906",
    country: "UK",
    isPartner: true,
  },
  {
    id: 5,
    name: "Kongsberg Maritime",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Navigation & Automation",
    description: "Leading provider of marine technology for navigation, automation, and safety",
    products: ["Navigation Systems", "Automation", "Safety Equipment"],
    rating: 4.8,
    established: "1814",
    country: "Norway",
    isPartner: true,
  },
  {
    id: 6,
    name: "Furuno",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Marine Electronics",
    description: "World-renowned manufacturer of marine electronics and navigation equipment",
    products: ["Radar Systems", "GPS", "Fish Finders", "Communication"],
    rating: 4.7,
    established: "1948",
    country: "Japan",
    isPartner: false,
  },
  {
    id: 7,
    name: "Alfa Laval",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Marine Systems",
    description: "Specialized in heat transfer, separation and fluid handling for marine industry",
    products: ["Heat Exchangers", "Separators", "Pumps", "Valves"],
    rating: 4.8,
    established: "1883",
    country: "Sweden",
    isPartner: true,
  },
  {
    id: 8,
    name: "Sperry Marine",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Navigation Systems",
    description: "Leading manufacturer of marine navigation and bridge systems",
    products: ["Gyrocompasses", "Autopilots", "Radar", "ECDIS"],
    rating: 4.6,
    established: "1910",
    country: "UK",
    isPartner: false,
  },
  {
    id: 9,
    name: "Danfoss",
    logo: "/placeholder.svg?height=100&width=200",
    category: "Marine Controls",
    description: "Advanced control solutions and components for marine applications",
    products: ["Control Systems", "Valves", "Sensors", "Drives"],
    rating: 4.7,
    established: "1933",
    country: "Denmark",
    isPartner: true,
  },
]

const categories = [
  { id: "all", name: "All Brands" },
  { id: "engines", name: "Engine & Power Systems" },
  { id: "navigation", name: "Navigation & Electronics" },
  { id: "systems", name: "Marine Systems" },
  { id: "controls", name: "Controls & Automation" },
]

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      brand.category
        .toLowerCase()
        .includes(
          selectedCategory === "engines"
            ? "engine"
            : selectedCategory === "navigation"
              ? "navigation"
              : selectedCategory === "systems"
                ? "systems"
                : selectedCategory === "controls"
                  ? "control"
                  : "",
        )

    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">TRUSTED BRANDS</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Brand Partners</h1>
            <p className="text-xl text-indigo-200 leading-relaxed">
              We partner with world-leading marine and industrial equipment manufacturers to bring you the highest
              quality products and cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="text-3xl font-bold text-indigo-600 mb-2">{brands.length}+</div>
              <div className="text-gray-600">Global Brands</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{brands.filter((b) => b.isPartner).length}</div>
              <div className="text-gray-600">Official Partners</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing {filteredBrands.length} brands
              {selectedCategory !== "all" && (
                <span> in {categories.find((cat) => cat.id === selectedCategory)?.name}</span>
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Brand Logo */}
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-b">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-full h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Partner Badge */}
                  {brand.isPartner && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Partner
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Brand Info */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{brand.rating}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {brand.category}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{brand.description}</p>

                  {/* Products */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {brand.products.slice(0, 3).map((product, idx) => (
                        <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Brand Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {brand.country}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Est. {brand.established}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-xs">
                      View Products
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Award className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No brands found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
              Are you a manufacturer looking to expand your reach in the marine and industrial sector? Let's discuss
              partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-900 bg-transparent"
              >
                Contact Partnership Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
