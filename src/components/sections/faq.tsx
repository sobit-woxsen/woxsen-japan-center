"use client"

import { useState, useEffect, useRef } from "react"

const faqs = [
  {
    question: "What is the Woxsen Japan Centre?",
    answer:
      "The Woxsen Japan Centre is a specialized hub at Woxsen University dedicated to fostering Japanese cultural understanding, language education, and business collaboration between Japan and India. We provide comprehensive programs in Japanese language, cultural exchange, and professional development.",
    category: "General",
  },
  {
    question: "Who can join the Japanese language program?",
    answer:
      "Our JLPT preparation program is open to all students and professionals interested in learning Japanese. We offer courses from beginner (N5) to advanced (N2) levels, accommodating learners at any stage of their Japanese language journey.",
    category: "Programs",
  },
  {
    question: "What are the benefits of JLPT certification?",
    answer:
      "JLPT certification is globally recognized and opens doors to educational opportunities, career advancement in Japanese companies, study abroad programs in Japan, and deeper cultural engagement. It's essential for anyone serious about working or studying in Japan.",
    category: "Programs",
  },
  {
    question: "Do you offer study abroad programs to Japan?",
    answer:
      "Yes, we facilitate student exchange programs and internship opportunities in Japan through our partnerships with Japanese universities and organizations. Members of our community gain access to these exclusive opportunities for cultural immersion and academic advancement.",
    category: "Opportunities",
  },
  {
    question: "How can I participate in cultural events?",
    answer:
      "Cultural events are open to all community members. Simply join our centre through the membership form, and you'll receive updates about upcoming festivals, workshops, tea ceremonies, and other authentic Japanese cultural experiences.",
    category: "Events",
  },
  {
    question: "What career support do you provide?",
    answer:
      "We offer mentorship programs, networking events with Japanese business professionals, career guidance for opportunities in Japan, and connections to Japanese companies operating in India. Our goal is to prepare students for successful careers in the Japan-India business corridor.",
    category: "Career",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl font-normal tracking-wide mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Everything you need to know about our programs and community
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group relative bg-background rounded-xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Japanese Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center gap-4 hover:bg-accent/5 transition-colors"
              >
                {/* Number Badge */}
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-bold flex items-center justify-center">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 text-foreground font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-accent/30 text-accent flex items-center justify-center text-lg transition-transform duration-300 ${openIndex === idx ? "rotate-45 bg-accent/10" : ""
                    }`}
                >
                  +
                </span>
              </button>

              {/* Answer - Smooth Accordion */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <div className="w-12 h-0.5 bg-accent/30 mb-4" />
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block bg-foreground rounded-xl p-8 md:p-10">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-white font-serif text-xl md:text-2xl font-normal mb-3">
              Still Have Questions?
            </h3>
            <p className="text-white/60 text-sm mb-6 max-w-sm">
              We&apos;re here to help. Reach out to our team for personalized assistance.
            </p>
            <a
              href="mailto:japan.centre@woxsen.edu.in"
              className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 border border-accent/50"
            >
              Contact Us
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
