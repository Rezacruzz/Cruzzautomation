"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/Data/products.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductInquiryModal } from "@/components/product-inquiry-modal";
import { ProductDetailsModal } from "@/components/product-details-modal";
import { FaWhatsapp } from "react-icons/fa";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  listImage: string[];
  description: string;
  features: string[];
}

const productCategories = [
  { id: "all", name: "All Products" },
  { id: "marine automation", name: "Marine automation" },
  { id: "industrial automation", name: "Industrial automation" },
  { id: "hydraulics", name: "Hydraulics"},
  { id: "tools", name: "Tools" },
  { id: "calibration and measurement", name: "Calibration and Measurement" },
  { id: "marine navigation systems", name: "Radar and Navigation " },
  { id: "Alarm And Safety", name: "Alarm And Safety" },
  { id: "Pneumatic air chain", name: "Pneumatic air chain" },
  { id: "Turbocharger ", name: "Turbocharger " },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Discover our comprehensive range of marine and industrial products, designed to meet the highest quality standards and industry requirements.
            </p>
          </motion.div>
        </div>
      </section>
 <section className="py-4 bg-white border-b">
        <div className="container  mx-auto px-4">
          <div className="flex flex-nowrap overflow-x-auto justify-start gap-2 pb-2 scrollbar-visible">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm px-4 py-2 rounded-full flex-shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {productCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} 
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

      {/* Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  {productCategories.find((cat) => cat.id === selectedCategory)?.name}
                </span>
              )}
            </p>
          </motion.div>

          <div
            className={`grid gap-8 ${
              viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col ${
                  viewMode === "list" ? "md:flex-row" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    viewMode === "list" ? "w-full md:w-64 flex-shrink-0" : ""
                  }`}
                >
                  <img
                    src={product.listImage[0] || "/placeholder.svg"}
                    alt={product.name}
                    onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                    className="w-full aspect-[4/3] object-contain p-4 bg-white transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-sm text-blue-600 font-medium capitalize">
                      {productCategories.find((cat) => cat.id === product.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Buttons aligned at the bottom */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2 lg:gap-5">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() =>
                          setInquiryModal({ isOpen: true, product })
                        }
                      >
                        Get Quote
                      </Button>
                      <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/919714252562?text=" +
                          encodeURIComponent(`Hello , thank you for connecting with us!

Welcome to *Cruzz Automation*  
We're here to help you with marine and industrial products.  
How can we assist you today?`),
                          "_blank"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 hidden lg:flex items-center"
                    >
                     <FaWhatsapp className="w-2 h-2" /> Whatsapp
                    </Button>

                    {/* Show only on mobile */}
                    <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/919714252562?text=" +
                          encodeURIComponent(`Hello , thank you for connecting with us!

Welcome to *Cruzz Automation*  
We're here to help you with marine and industrial products.  
How can we assist you today?`),
                          "_blank"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 flex lg:hidden"
                    >
                      <FaWhatsapp className="w-2 h-2" />
                    </Button>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setDetailsModal({ isOpen: true, product })}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modals */}
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
  );
}