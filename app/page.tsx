"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import {BrandCarousel} from "@/components/BrandCarousel"


export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StatsSection />
      <WhyChooseSection />
      <NewArrivalsSection />
      <BrandCarousel />
    </motion.main>
  )
}
