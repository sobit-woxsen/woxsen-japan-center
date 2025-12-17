"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const ContentBlock = ({
  title,
  content,
  imageSrc,
  reverse = false,
}: {
  title: string
  content: string
  imageSrc: string
  reverse?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 my-20`}
    >
      <div className="flex-1">
        <h3 className="text-accent font-sans text-3xl md:text-4xl font-semibold mb-6 tracking-wide">{title}</h3>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed text-justify">{content}</p>
      </div>

      <div
        className={`flex-1 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } transition-all duration-700`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <div className="absolute inset-0 bg-accent/20 rounded-xl pointer-events-none" />
          <Image
            src={imageSrc || "/placeholder.svg?height=400&width=500&query=woxsen-japan"}
            alt={title}
            width={500}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <h2 className="text-accent font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              ABOUT US
            </h2>
            <div className="flex-grow h-px bg-accent" />
          </div>

          <p className="mt-8 text-foreground/70 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Woxsen Japan Centre promotes understanding and collaboration between Japan and the world's leading business
            institutions.
          </p>
        </div>

        {/* Content Blocks */}
        <ContentBlock
          title="OUR MISSION"
          content="We empower leaders and entrepreneurs through transformative education rooted in Japanese business philosophy. By bridging Eastern wisdom with global innovation, we prepare the next generation to drive sustainable growth and cultural understanding."
          imageSrc="/mission-japan.jpg"
        />

        <ContentBlock
          title="OUR VISION"
          content="To establish Woxsen Japan Centre as the premier hub for developing globally-minded leaders who embody Japanese values of excellence, integrity, and harmonious collaboration while driving meaningful impact across continents."
          imageSrc="/vision-japan.jpg"
          reverse
        />

        <ContentBlock
          title="CORE VALUES"
          content="Excellence in all endeavors, respect for diverse perspectives, commitment to continuous improvement (kaizen), and building sustainable partnerships. We believe in creating value through thoughtful leadership and ethical business practices."
          imageSrc="/values-japan.jpg"
        />
      </div>
    </section>
  )
}
