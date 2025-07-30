"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductInquiryModalProps {
  isOpen: boolean
  onClose: () => void
  product: any
}

export function ProductInquiryModal({ isOpen, onClose, product }: ProductInquiryModalProps) {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    contactNo: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);


 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/submit-google-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: product.name,
        inquiryType: formData.inquiryType,
        name: formData.name,
        contactNo: formData.contactNo,
        email: formData.email,
        message: formData.message,
      }),
    })

    const result = await res.json()
    if (result.success) {
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({
          inquiryType: "",
          name: "",
          contactNo: "",
          email: "",
          message: "",
        })
        setIsSubmitted(false)
        onClose()
      }, 3000)
    } else {
      alert("Failed to submit: " + result.error)
    }
  } catch (error) {
    console.error("Client submit error:", error)
    alert("Something went wrong. Try again.")
  } finally {
    setIsSubmitting(false)
  }
}




  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Product Inquiry</h2>
                <p className="text-sm text-gray-600 mt-1">Inquiring about: {product.name}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <Label htmlFor="inquiryType" className="text-gray-700 font-medium">
                      Inquiry Type
                    </Label>
                    <Select
                      name="entry.730778615"
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger className="mt-2 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Price Quote</SelectItem>
                        <SelectItem value="specification">Technical Specification</SelectItem>
                        <SelectItem value="availability">Product Availability</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="manual">Manual/Documentation</SelectItem>
                        <SelectItem value="marine">Marine products</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Name and Contact */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        name="entry.238653286"
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-2 bg-gray-50 border-gray-200"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactNo" className="text-gray-700 font-medium">
                        Contact No. *
                      </Label>
                      <Input
                        id="contactNo"
                        value={formData.contactNo}
                        onChange={(e) => handleInputChange("contactNo", e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-2 bg-gray-50 border-gray-200"
                        name="entry.1854646120"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Your Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-2 bg-gray-50 border-gray-200"
                      required
                      name="entry.451742628"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="entry.1926490849"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={`Please provide details about your inquiry for ${product.name}...`}
                      className="mt-2 bg-gray-50 border-gray-200 min-h-[120px] resize-none"
                      required
                    />
                    
                  </div>


                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        SUBMITTING...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        SUBMIT NOW
                        <Send className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Submitted!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your inquiry about {product.name}. We'll get back to you within 24 hours.
                  </p>
                  <div className="text-sm text-gray-500">This window will close automatically in a few seconds...</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
