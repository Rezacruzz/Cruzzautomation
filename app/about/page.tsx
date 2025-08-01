"use client"

import { motion } from "framer-motion"
import { CheckCircle,Building2,Anchor, Settings, Layers, MessageCircle, Ship   } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Building2 ,
      title: "Industrial Automation",
      description:
        "To deliver reliable automation systems and components that enhance operational efficiency, backed by trusted brands and expert support.",
    },
    {
      icon: Anchor,
      title: "Marine Automation & Equipment",
      description:
        "Delivering reliable marine systems, including control units, engine room automation, purifiers, turbochargers, valves, and hydraulic components — trusted by ship owners and engineers worldwide.",
    },
    {
      icon: Settings ,
      title: "Tools & Industrial Equipment",
      description:
        "Supplying electrical tools, workshop machinery, and OEM or legacy spares — built to meet diverse industrial maintenance and operational needs.",
    },
  ]

  const achievements = [
    { number: "1+", label: "Years Experience" },
    { number: "150+", label: "Products" },
    { number: "120+", label: "Satisfied Clients" },
    { number: "200+", label: "Customer Satisfaction" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
           
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Cruzz Automation</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Welcome to Cruzz Automation – your trusted partner in industrial and marine automation solutions, delivering innovation, reliability, and value-driven engineering across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-15 2xl:gap-0 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Cruzz Automation, we specialize in supplying high-quality automation systems, marine spare parts, tools, and equipment sourced globally to support industries in achieving seamless operation and productivity. With a focus on both industrial and marine sectors, we offer tailored solutions that meet the growing demands of automation, safety, and operational efficiency.
                </p>
                <p>
                  We enjoy the reputation of being a trusted entity for many years, with the support of our loyal
                  clients and our attitude of rendering quality goods and services. Our extensive experience in the
                  marine industry has enabled us to understand the unique requirements of our customers.
                </p>
                <p>
                  Today, we serve customers across the globe, maintaining the highest standards of quality and
                  professionalism in every transaction. Our commitment to excellence has made us a preferred partner for
                  marine and industrial equipment needs.
                </p>
              </div>
            </motion.div>

            <motion.div
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex gap-8 flex-wrap justify-center"
>
  {/* Founder */}
  <div className="relative">
    <img
      src="/assets/Images/owner.jpeg"
      alt="Founder"
      className="w-[350px] h-[460px] object-cover object-center rounded-2xl shadow-lg"
    />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-blue-600/90 backdrop-blur-sm px-6 py-3 text-center rounded-b-2xl">
      <p className="font-semibold text-white text-lg">Mr. Mohammed Reza</p>
      <p className="text-sm text-blue-100">Co-Founder at cruzz Automation </p>
    </div>
    

  </div>

 
</motion.div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🔧 What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on strong values and clear vision, we strive to exceed expectations and deliver excellence in every
              aspect of our business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-blue-200">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team and commitment to quality make us the preferred choice for marine and industrial
              equipment worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "100% Client Satisfaction",
                desc: " Trusted vendor for marine and industrial engineers",
              },
              { icon: Layers , title: "Complete Range", desc: "Complete range under one roof" },
              { icon: MessageCircle , title: "Quick Expert Support", desc: " Quick response to inquiries with expert assistance" },
              { icon: Ship , title: "Global Delivery Assurance", desc: "Quality-tested parts with worldwide logistics" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
