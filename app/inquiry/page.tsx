"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    specificProducts: "",
    quantity: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch("/api/submit-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inquiryType: formData.inquiryType,
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        productCategory: formData.productCategory,
        productInterest: formData.specificProducts,
        quantity: formData.quantity,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message
      })
    })

    const result = await response.json()

    if (result.success) {
      setIsSubmitted(true)
    } else {
      console.error("Submission failed:", result.error)
      alert("❌ Submission failed. Try again.")
    }
  } catch (error) {
    console.error("❌ Network error:", error)
    alert("Network error. Please try again.")
  }

  setIsSubmitting(false)

  setTimeout(() => {
    setIsSubmitted(false)
    setFormData({
      inquiryType: "",
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      productCategory: "",
      specificProducts: "",
      quantity: "",
      budget: "",
      timeline: "",
      message: "",
      newsletter: false,
    })
  }, 5000)
}


  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const inquiryTypes = [
    { value: "quote", label: "Price Quote Request" },
    { value: "bulk", label: "Bulk Order Inquiry" },
    { value: "technical", label: "Technical Specification" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "distribution", label: "Distribution Inquiry" },
    { value: "custom", label: "Custom Solution" },
    { value: "other", label: "Other" },
  ]

  const productCategories = [
    { value: "safety", label: "Safety Equipment" },
    { value: "tools", label: "Industrial Tools" },
    { value: "calibration", label: "Calibration & Measuring" },
    { value: "engine", label: "Engine Parts" },
    { value: "navigation", label: "Navigation Equipment" },
    { value: "maintenance", label: "Maintenance Equipment" },
    { value: "all", label: "All Categories" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9714252562"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Info@cruzzautomation.com"],
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "18, Spinning",
        "Mill compound near,",
        "APMC market Mahuva,",
        "Bhavnagar - 364290,",
        "Gujarat, India",
      ],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-orange-600",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Business Inquiry</h1>
            <p className="text-xl text-purple-200 leading-relaxed">
              Ready to partner with us? Submit your detailed inquiry and our team will get back to you with customized
              solutions for your marine and industrial equipment needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you find the perfect marine and industrial solutions. Reach out to us through any of
                these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              >
                <h3 className="font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-blue-600">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold text-green-600">25+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Global Reach</span>
                    <span className="font-semibold text-purple-600">50+ countries</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Your Inquiry</h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-700 font-medium">
                        Inquiry Type *
                      </Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Company and Contact */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName" className="text-gray-700 font-medium">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Your company name"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPerson" className="text-gray-700 font-medium">
                          Contact Person *
                        </Label>
                        <Input
                          id="contactPerson"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          placeholder="Your full name"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Country and Product Category */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country" className="text-gray-700 font-medium">
                          Country *
                        </Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="Your country"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="productCategory" className="text-gray-700 font-medium">
                          Product Category
                        </Label>
                        <Select
                          value={formData.productCategory}
                          onValueChange={(value) => handleInputChange("productCategory", value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {productCategories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Specific Products */}
                    <div>
                      <Label htmlFor="specificProducts" className="text-gray-700 font-medium">
                        Specific Products of Interest
                      </Label>
                      <Input
                        id="specificProducts"
                        value={formData.specificProducts}
                        onChange={(e) => handleInputChange("specificProducts", e.target.value)}
                        placeholder="List specific products you're interested in"
                        className="mt-2"
                      />
                    </div>

                    {/* Quantity, Budget, Timeline */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="quantity" className="text-gray-700 font-medium">
                          Estimated Quantity
                        </Label>
                        <Input
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange("quantity", e.target.value)}
                          placeholder="e.g., 100 units"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-gray-700 font-medium">
                          Budget Range
                        </Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          placeholder="e.g., $10,000 - $50,000"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-gray-700 font-medium">
                          Timeline
                        </Label>
                        <Input
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                          placeholder="e.g., 3 months"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Detailed Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide detailed information about your requirements, specifications, and any other relevant details..."
                        className="mt-2 min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        Subscribe to our newsletter for product updates and industry news
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          SUBMITTING INQUIRY...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          SUBMIT INQUIRY
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your detailed inquiry. Our team will review your requirements and get back to you
                      within 24 hours with a customized proposal.
                    </p>
                    <div className="text-sm text-gray-500">
                      You should receive a confirmation email shortly at {formData.email}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
