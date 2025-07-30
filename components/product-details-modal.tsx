"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, Shield, Truck, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ProductInquiryModal } from "./product-inquiry-modal"
interface ProductDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  product: any
}

interface Product {
  id: number;
  name: string;
  category: string;
  listImage: string[];
  description: string;
}
export function ProductDetailsModal({ isOpen, onClose, product }: ProductDetailsModalProps) {
  const [activeImage, setActiveImage] = useState("");
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; product: Product | null }>({
    isOpen: false,
    product: null,
  });

  useEffect(() => {
    if (product?.image) {
      setActiveImage(product.image)
    } else if (Array.isArray(product?.listImage) && product.listImage.length > 0) {
      setActiveImage(product.listImage[0])
    }
  }, [product])

  if (!product) return null

  const allImages = [product.image, ...(Array.isArray(product.listImage) ? product.listImage : [product.listImage])].filter(Boolean)

  const benefits = [
    { icon: Shield, title: "Quality Assured", description: "Rigorous quality control and testing" },
    { icon: Award, title: "Certified Products", description: "International certifications and standards" },
    { icon: Truck, title: "Fast Delivery", description: "Quick and reliable shipping worldwide" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {product.category}
                    </Badge>
                   
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={activeImage || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-80 object-contain bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {allImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg cursor-pointer border-2 ${imgSrc === activeImage ? "border-blue-600" : "border-transparent"}`}
                        onClick={() => setActiveImage(imgSrc)}
                      >
                        <img
                          src={imgSrc}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="w-full h-20 object-contain bg-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {product.description} This high-quality marine and industrial equipment is designed to meet the most demanding requirements in harsh marine environments.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features?.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{benefit.title}</h4>
                          <p className="text-gray-600 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() =>
                          setInquiryModal({ isOpen: true, product })
                        }>Get Quote</Button>
                   <Link href="/inquiry"> 
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Inquiry 
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications in Industrial Automation</h3>
                {product.applications && product.applications.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {product.applications.map((app: string, idx: number) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">Not applicable</p>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      )}
      <ProductInquiryModal
                    isOpen={inquiryModal.isOpen}
                    onClose={() => setInquiryModal({ isOpen: false, product: null })}
                    product={inquiryModal.product}
                  />
    </AnimatePresence>
  )
}
