"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail ,Linkedin  } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Marine Products", href: "/Marineproducts" },
    { name: "Contact Us", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Mail, href: "mail:info@cruzzautomation.com", label: "Mail",type: "info@cruzzautomation.com" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/cruzz-automation/about/?viewAsMember=true", label: "LinkedIn" },
    
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border">
                  <img src="/assets/logo/logo3.png" className="rounded-full" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cruzz Automation</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading exporters of marine and industrial products with 1+ years of experience. Quality products, timely
              delivery, and exceptional customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
               <button
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
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-c"
                  ><FaWhatsapp /> 
                  </button>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Address</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">18, Spinning ,</p>
                  <p className="text-gray-300">Mill compound near, </p>
                  <p className="text-gray-300">APMC market Mahuva,</p>
                  <p className="text-gray-300">Bhavnagar - 364290</p>
                  <p className="text-gray-300">Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">+91 9714252562</p>
                  <p className="text-sm text-gray-400">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">info@cruzzautomation.com</p>
                  <p className="text-sm text-gray-400">Send us an email</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© Copyright cruzz automation 2025 - All right reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed by{" "}
              <a href="https://www.scripticx.tech/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                ScripticX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
