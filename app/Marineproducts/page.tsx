"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Filter, Grid, List, Star, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductInquiryModal } from "@/components/product-inquiry-modal"
import { ProductDetailsModal } from "@/components/product-details-modal"
import { marineProducts } from '@/Data/marineProducts.js';
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  category: string;
  listImage: string[];
  description: string;
  features: string[];
}


export default function Marineproducts() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });

  const filteredProducts = marineProducts.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">New Products</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Marine Products</h1>
            <p className="text-xl text-green-200 leading-relaxed">
             In addition to listed products, we cater to direct marine requirements—connect with us for customized sourcing solutions
            </p>
          </motion.div>
        </div>
      </section>



      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search new arrivals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
             
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
         

          <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${viewMode === "list" ? "flex" : ""
                  }`}
              >
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-64 flex-shrink-0" : ""}`}>
                  <img
                    src={product.listImage[0] || "/placeholder.svg"}
                    alt={product.name}
                    className={`object-cover group-hover:scale-110 transition-transform duration-700 ${viewMode === "list" ? "w-full h-full" : "w-full h-64"
                      }`}
                  />





                </div>

                <div className="p-6 flex-1">
                  

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-1  justify-between">
                    <div className="flex gap-2 lg:gap-5">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => setInquiryModal({ isOpen: true, product })}
                      >
                        Get Quote
                      </Button>
                      <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/919714252562?text=" +
                          encodeURIComponent(`Hello, I would like to connect with you!`),
                          "_blank"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 hidden lg:flex items-center"
                    >
                    <FaWhatsapp className="w-2 h-2" />   Whatsapp
                    </Button>

                    {/* Show only on mobile */}
                    <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/919714252562?text=" +
                          encodeURIComponent(`Hello, I would like to connect with you!`),
                          "_blank"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 flex lg:hidden"
                    >
                      <FaWhatsapp className="w-2 h-2" />
                    </Button>
                    </div>

                    <Button variant="outline" onClick={() => setDetailsModal({ isOpen: true, product })}>
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No new arrivals found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>



      <ProductInquiryModal
        isOpen={inquiryModal.isOpen}
        onClose={() => setInquiryModal({ isOpen: false, product: null })}
        product={inquiryModal.product}
      />

      <ProductDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, product: null })}
        product={detailsModal.product}
      />
    </div>
  )
}
