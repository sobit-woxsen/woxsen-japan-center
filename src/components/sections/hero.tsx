"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import SakuraEffect from "@/components/ui/sakura-effect"

export default function Hero() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation timings
    const logoTimer = setTimeout(() => setLogoVisible(true), 200)
    const titleTimer = setTimeout(() => setTitleVisible(true), 700)
    const contentTimer = setTimeout(() => setShowContent(true), 1200)

    // Subtle parallax
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          if (bgRef.current) {
            bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(titleTimer)
      clearTimeout(contentTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/background/hero-bg-new.avif"
          alt="Hero Background"
          fill
          className="object-cover scale-110"
          priority
        />
      </div>

      {/* Reddish Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-red-900/60 via-red-800/30 to-foreground/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20" />

      {/* Sakura Petal Animation */}
      <SakuraEffect petalCount={12} />

      {/* Japanese Watermark - Subtle */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <span className="font-serif text-[12rem] md:text-[18rem] text-white/[0.03] select-none">
          日本
        </span>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center z-10 text-center px-6 h-screen">
        {/* Logo with Glow */}
        <div
          className={`mb-8 relative transition-all duration-1000 ease-out ${logoVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150" />
          <Image
            src="/wjc-logo.png"
            alt="Woxsen Japan Centre Logo"
            width={200}
            height={200}
            priority
            className="relative w-40 md:w-70 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Title - Larger */}
        <div className={`mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-wide drop-shadow-lg">
            Woxsen Japan Centre
          </h1>
        </div>

        {/* Accent Line */}
        <div className={`w-20 h-1 bg-accent rounded-full mb-6 transition-all duration-500 ${titleVisible ? 'opacity-100 w-20' : 'opacity-0 w-0'}`} />

        {/* Subtitle - Larger */}
        <p className={`text-white/80 text-lg md:text-xl tracking-wide max-w-lg mb-12 font-light transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Bridging Japan and Global Business Leadership through Education and Culture
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold tracking-wide px-10 py-6 text-base rounded-sm transition-all hover:scale-105 shadow-lg shadow-accent/30"
          >
            <Link href="/join">Join Our Community</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-1 border-accent/10 text-accent hover:bg-accent/10 hover:border-accent font-semibold tracking-wide px-10 py-6 text-base rounded-sm backdrop-blur-sm transition-all hover:scale-105"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
