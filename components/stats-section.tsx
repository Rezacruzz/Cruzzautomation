"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: 1, suffix: "", label: "YEAR", sublabel: "Leading Exporters of Marine & Industrial Products" },
    { number: 150, suffix: "+", label: "Ship", sublabel: "Products" },
    { number: 120, suffix: "+", label: "Satisfied", sublabel: "Clients" },
    { number: 200, suffix: "+", label: "Customer", sublabel: "Satisfaction" },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center text-white"
            >
              {index === 0 ? (
                // Special styling for the first stat (25 YEAR)
                <div className="border-2 border-yellow-400 rounded-lg p-8 mb-6 bg-blue-800/30">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="text-6xl lg:text-7xl font-bold text-yellow-400 mb-2"
                  >
                    <CountUpAnimation target={stat.number} isInView={isInView} delay={0.5 + index * 0.2} />
                    <span className="text-4xl">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-yellow-400 font-semibold text-xl mb-2">{stat.label}</div>
                  <div className="text-white/80 text-sm leading-tight">{stat.sublabel}</div>
                </div>
              ) : (
                // Regular stats
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4"
                  >
                    <CountUpAnimation target={stat.number} isInView={isInView} delay={0.5 + index * 0.2} />
                    <span className="text-3xl">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
                  <div className="text-white/80 text-sm">{stat.sublabel}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpAnimation({ target, isInView, delay }: { target: number; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [target, isInView, delay])

  return <span>{count}</span>
}
