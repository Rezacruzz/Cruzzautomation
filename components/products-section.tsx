"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductInquiryModal } from "@/components/product-inquiry-modal";
import { ProductDetailsModal } from "@/components/product-details-modal";
import { products } from "@/Data/products.js";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";


// Define the Product interface based on the expected data structure
interface Product {
  id: number;
  name: string;
  category: string;
  listImage: string[];
  description: string;
}

// Define the modal state interface
interface ModalState {
  isOpen: boolean;
  product: Product | null;
}

export function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [inquiryModal, setInquiryModal] = useState<ModalState>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = useState<ModalState>({
    isOpen: false,
    product: null,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4">— Cruzz Automation</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of marine and industrial products,
            designed to meet the highest quality standards and industry
            requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    product.listImage && product.listImage[0]
                      ? product.listImage[0]
                      : "/placeholder.svg"
                  }
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-1 justify-between z-20 relative">
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
                          encodeURIComponent(`Hello , thank you for connecting with us!

Welcome to *Cruzz Automation*  
We're here to help you with marine and industrial products.  
How can we assist you today?`),
                          "_blank"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 hidden lg:flex items-center"
                    >
                      Whatsapp
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
                    onClick={() =>
                      setDetailsModal({ isOpen: true, product })
                    }
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

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
    </section>
  );
}