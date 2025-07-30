"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaWhatsapp } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Marine products", href: "/Marineproducts" },
    { name: "Inquiry", href: "/inquiry" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 md:text-left hidden md:block ">Exporters of Marine & Industrial Products</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 97142 52562</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>info@cruzzautomation.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12  rounded-full flex items-center justify-center border">
              <img src="/assets/logo/logo3.png" className="rounded-full" alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Cruzz Automation</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
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
              className="bg-green-600 hover:bg-green-700"
            ><FaWhatsapp />
              Whatsapp
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/919714252562?text=" +
                        encodeURIComponent(`Hello 👋, thank you for connecting with us!

Welcome to **Cruzz Automation** 🚢⚙️  
We're here to help you with marine and industrial products.  
How can we assist you today?`),
                        "_blank"
                      )
                    }
                    className="bg-green-600 hover:bg-green-700 mt-4"
                  ><FaWhatsapp /> Whatsapp
                  </Button>

                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
