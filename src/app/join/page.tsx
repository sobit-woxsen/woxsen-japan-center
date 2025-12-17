"use client"

import { useState } from "react"
import Footer from "@/components/sections/footer"
import PageHeader from "@/components/sections/page-header"
import { ArrowUpRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Fill the Form",
    description: "Complete our quick registration form with your details and interests.",
  },
  {
    number: "02",
    title: "Get Verified",
    description: "Our team will review your application and send you a confirmation.",
  },
  {
    number: "03",
    title: "Start Exploring",
    description: "Access events, courses, and connect with our vibrant community.",
  },
]

const benefits = [
  { icon: "🌸", title: "Cultural Experiences", description: "Participate in authentic Japanese cultural activities, workshops, and festivals." },
  { icon: "📚", title: "Language Learning", description: "Access comprehensive Japanese language courses for all proficiency levels." },
  { icon: "🤝", title: "Networking", description: "Connect with professionals, students, and cultural enthusiasts." },
  { icon: "✈️", title: "Study Abroad", description: "Explore opportunities for student exchanges and internships in Japan." },
  { icon: "💼", title: "Career Support", description: "Gain mentorship for careers in Japan or with Japanese organizations." },
  { icon: "🎓", title: "Certifications", description: "Prepare for JLPT and other Japanese language certifications." },
]

const testimonials = [
  {
    quote: "Joining the Japan Centre was the best decision of my college life. The cultural events and language classes have been incredible!",
    name: "Priya Sharma",
    role: "BBA, 3rd Year",
  },
  {
    quote: "The JLPT preparation course helped me pass N4 on my first attempt. The instructors are so supportive and knowledgeable.",
    name: "Rahul Menon",
    role: "B.Tech, 2nd Year",
  },
  {
    quote: "I've made lifelong friends and learned so much about Japanese culture. The community here is truly welcoming.",
    name: "Ananya Reddy",
    role: "MBA, 1st Year",
  },
]

const faqs = [
  {
    question: "Who can join the Woxsen Japan Centre?",
    answer: "The centre is open to all Woxsen University students, faculty, and staff. We welcome anyone with an interest in Japanese language and culture.",
  },
  {
    question: "Is there a membership fee?",
    answer: "Basic community membership is free for all Woxsen students. JLPT courses and specialized programs may have separate fees.",
  },
  {
    question: "Do I need to know Japanese to join?",
    answer: "Not at all! We welcome complete beginners. Our programs cater to all levels, from absolute beginners to advanced learners.",
  },
  {
    question: "What events do you organize?",
    answer: "We host cultural festivals, movie screenings, cooking workshops, calligraphy sessions, tea ceremonies, and networking events with Japanese professionals.",
  },
]

export default function JoinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="w-full">
      <PageHeader title="JOIN US" subtitle="Be Part of Our Global Community" watermark="参加" />

      {/* Introduction */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-background texture-overlay">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
            Welcome
          </span>
          <h2 className="text-foreground font-serif text-3xl md:text-5xl font-normal tracking-wide mb-6">
            Join a Vibrant Community
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            The Woxsen Japan Centre welcomes students, faculty, and enthusiasts who share a passion for
            Japanese language, culture, and Indo-Japanese relations. Become part of our growing community
            and unlock a world of opportunities.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              Getting Started
            </span>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="text-accent/20 font-serif text-7xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-foreground font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-accent/30 text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              Why Join
            </span>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
              Membership Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-accent/5 rounded-xl p-6 hover:bg-accent/10 transition-colors"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Cards */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              Register
            </span>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
              Choose Your Path
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Community Membership Card */}
            <div className="group relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🎌</span>
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Community</span>
                </div>
                <h3 className="text-foreground font-serif text-2xl font-normal mb-3">
                  Join Our Community
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Become a member and unlock exclusive access to cultural events, language workshops, and networking sessions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-accent">✓</span> Free for all Woxsen students
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-accent">✓</span> Access to cultural events
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-accent">✓</span> Community networking
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSenfpbj8b4zINjx9z0DnqeB0yaTVev_XLvP5rKchMYEI49q3w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  Register Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* JLPT Course Card */}
            <div className="group relative bg-foreground rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Language Course</span>
                </div>
                <h3 className="text-white font-serif text-2xl font-normal mb-3">
                  Enroll in JLPT Course
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Master Japanese with structured JLPT preparation courses from N5 to N2 with experienced instructors.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-accent">✓</span> Native instructors
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-accent">✓</span> All JLPT levels
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-accent">✓</span> Mock exams included
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSczMcKyQtLQMNaZA_zrEA4ddzJVK-f5NbtOhAqtye3dIE20ew/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  Enroll Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
              What Our Members Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-accent/5 rounded-xl p-8 relative"
              >
                <div className="text-accent/20 text-6xl font-serif absolute top-4 left-4">"</div>
                <div className="relative pt-8">
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-foreground font-semibold">{testimonial.name}</p>
                    <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group relative bg-background rounded-xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                {/* Japanese Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center gap-4 hover:bg-accent/5 transition-colors"
                >
                  {/* Number Badge */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-bold flex items-center justify-center">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-foreground font-semibold">{faq.question}</span>

                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-accent/30 text-accent flex items-center justify-center text-lg transition-transform duration-300 ${openFaq === idx ? "rotate-45 bg-accent/10" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* Smooth Accordion */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white font-serif text-2xl md:text-3xl font-normal mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/70 mb-6">
            Reach out to us directly for more information about our programs and membership.
          </p>
          <a
            href="mailto:japan.centre@woxsen.edu.in"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-foreground font-semibold px-6 py-3 rounded-lg transition-all"
          >
            ✉️ japan.centre@woxsen.edu.in
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
