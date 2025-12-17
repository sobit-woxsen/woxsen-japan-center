"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const benefits = [
  { icon: "🌸", title: "Cultural Experiences", desc: "Authentic Japanese festivals and workshops" },
  { icon: "📚", title: "Language Learning", desc: "JLPT courses from N5 to N2" },
  { icon: "🤝", title: "Networking", desc: "Connect with global professionals" },
  { icon: "✈️", title: "Study Abroad", desc: "Exchange opportunities in Japan" },
]

export default function FeaturedJoin() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
            Get Involved
          </span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl font-normal tracking-wide mb-6">
            Join Our Community
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Be part of a vibrant community bridging Japan and global perspectives
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group text-center p-6 rounded-xl bg-background border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-foreground font-semibold text-xl mb-1">{benefit.title}</h3>
              <p className="text-foreground/60 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Community Card */}
          <div
            className={`group relative rounded-xl overflow-hidden transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />

            {/* Japanese Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent/40" />

            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl">🎌</span>
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Free Membership</span>
              </div>
              <h3 className="text-foreground font-serif text-2xl font-normal mb-3">
                Join Our Community
              </h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                Access exclusive cultural events, language workshops, networking sessions, and more.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSenfpbj8b4zINjx9z0DnqeB0yaTVev_XLvP5rKchMYEI49q3w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 border border-accent/50"
              >
                Register Now
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* JLPT Card */}
          <div
            className={`group relative rounded-xl overflow-hidden bg-foreground transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Japanese Watermark */}
            <div className="absolute top-4 right-4 text-white/5 font-serif text-6xl font-bold">
              日本
            </div>

            {/* Japanese Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent/30" />

            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Language Course</span>
              </div>
              <h3 className="text-white font-serif text-2xl font-normal mb-3">
                Enroll in JLPT Course
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Prepare for JLPT certification with native instructors and comprehensive study materials.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSczMcKyQtLQMNaZA_zrEA4ddzJVK-f5NbtOhAqtye3dIE20ew/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 border border-accent/50"
              >
                Enroll Now
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Link
            href="/join"
            className="text-foreground/60 hover:text-accent text-sm transition-colors"
          >
            Learn more about membership benefits →
          </Link>
        </div>
      </div>
    </section>
  )
}
