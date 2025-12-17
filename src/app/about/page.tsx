import Footer from "@/components/sections/footer"
import PageHeader from "@/components/sections/page-header"
import CountUp from "@/components/ui/count-up"
import Image from "next/image"
import Link from "next/link"

const partnerships = [
  {
    title: "Woxsen University",
    logo: "/images/logos/woxsen.jpg",
    description:
      "Woxsen University establishes and oversees the Woxsen Japan Centre, providing the academic framework, resources, and leadership essential to its functioning.",
    benefits: ["Academic Framework & Leadership", "Global Engagement Programs", "Interdisciplinary Learning"],
    url: "https://www.woxsen.edu.in",
  },
  {
    title: "Indobox Inc.",
    logo: "/images/logos/indobox.webp",
    description:
      "Indobox Inc., headquartered in Hyderabad, plays a pivotal role in the development and execution of the centre's programming.",
    benefits: ["Language Immersion Sessions", "Career Guidance & Mentorship", "Cultural Experiences"],
    url: "https://www.indobox.co.jp",
  },
  {
    title: "Nara Japan Centre",
    logo: "/images/logos/nara-japan.png",
    description:
      "Rooted in the rich cultural heritage of Japan, Nara Japan Centre infuses its mission with unique cultural collaborations and academic exchanges.",
    benefits: ["Cultural Collaborations", "Academic Exchanges", "Long-term Relationship Building"],
    url: "#",
  },
]

const highlights = [
  { number: "2025", label: "Inaugurated" },
  { number: "7+", label: "Faculty" },
  { number: "18+", label: "Student Leaders" },
  { number: "100+", label: "Members" },
]

const teamPreview = [
  { name: "Dr. Raul V. Rodriguez", role: "Chairman", image: "/images/team/faculty-leadership/dr-raul-v-rodriguez.webp" },
  { name: "Dr. Brundaban Mishra", role: "Director", image: "/images/team/faculty-leadership/dr-brundaban-mishra.jpg" },
  { name: "Mr. Daisuke Tanji", role: "Deputy Director", image: "/images/team/faculty-leadership/mr-daisuke-tanji.jpg" },
]

export default function AboutPage() {
  return (
    <main className="w-full">
      <PageHeader title="ABOUT US" subtitle="Essence of Japan, Within Reach" watermark="概要" />

      {/* Introduction with Stats */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-background texture-overlay">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            The Woxsen Japan Centre is a university-led initiative dedicated to fostering intercultural dialogue
            and strengthening the India–Japan relationship through academic collaboration, cultural exchange,
            and professional engagement.
          </p>

          {/* Mini Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {highlights.map((stat, idx) => (
              <div key={idx} className="text-center">
                <CountUp
                  end={stat.number}
                  className="text-accent font-serif text-3xl md:text-4xl font-normal mb-1 block"
                />
                <div className="text-foreground/60 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-background rounded-xl p-8 md:p-10 border border-accent/10">
              <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">Our Mission</span>
              <h2 className="text-foreground font-serif text-2xl md:text-3xl font-normal tracking-wide mb-6">
                Bridging Cultures Through Education
              </h2>
              <p className="text-foreground/70 text-base leading-relaxed">
                Inaugurated on 2nd April 2025 by Mr. Muneo Takahashi, Consul-General of Japan in Chennai,
                we are dedicated to fostering intercultural dialogue and strengthening the India–Japan relationship
                through academic collaboration, cultural exchange, and professional engagement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background rounded-xl p-8 md:p-10 border border-accent/10">
              <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">Our Vision</span>
              <h2 className="text-foreground font-serif text-2xl md:text-3xl font-normal tracking-wide mb-6">
                A Future of Shared Understanding
              </h2>
              <p className="text-foreground/70 text-base leading-relaxed">
                We work to strengthen India and Japan relations through cultural exchange, academic involvement,
                and hands-on learning. Our goal is to promote true understanding between cultures by linking
                students and faculty to Japan&apos;s language, values, and modern practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-accent/30 text-7xl font-serif mb-4">"</div>
          <blockquote className="text-white text-xl md:text-2xl font-serif leading-relaxed mb-8 -mt-8">
            Our centre serves as a bridge connecting the ancient wisdom of Japan with the dynamic spirit of India,
            creating opportunities for meaningful exchange and mutual growth.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/team/faculty-leadership/dr-brundaban-mishra.jpg"
              alt="Dr. Brundaban Mishra"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-accent"
            />
            <div className="text-left">
              <p className="text-white font-semibold">Dr. Brundaban Mishra</p>
              <p className="text-white/60 text-sm">Director, Woxsen Japan Centre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-background texture-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">What We Stand For</span>
            <h2 className="text-foreground font-serif text-4xl md:text-5xl font-normal tracking-wide">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "Cultural Bridge", description: "Connecting Indian and Japanese communities through meaningful exchanges and shared experiences." },
              { icon: "📚", title: "Academic Excellence", description: "Providing world-class Japanese language education and professional development opportunities." },
              { icon: "🌸", title: "Authentic Experience", description: "Offering genuine insights into Japanese culture, traditions, and contemporary society." },
            ].map((value, idx) => (
              <div key={idx} className="group bg-accent/5 rounded-xl p-8 text-center hover:bg-accent/10 transition-all border border-transparent hover:border-accent/20 hover:shadow-lg">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-foreground font-serif text-xl font-normal mb-3">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">Leadership</span>
              <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide">
                Meet Our Team
              </h2>
            </div>
            <Link
              href="/team"
              className="mt-4 md:mt-0 text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
            >
              View Full Team →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamPreview.map((member, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-white font-serif text-xl">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-background texture-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">Collaborations</span>
            <h2 className="text-foreground font-serif text-4xl md:text-5xl font-normal tracking-wide mb-6">
              Our Partnerships
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Building bridges between India and Japan through strategic collaborations.
            </p>
          </div>

          {/* Partner Logos Bar */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16 py-8 border-y border-accent/10">
            {partnerships.map((partner, idx) => (
              <div key={idx} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.title}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {partnerships.map((partner, idx) => (
              <div
                key={idx}
                className="group bg-accent/5 rounded-xl p-8 hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 hover:shadow-lg"
              >
                <h3 className="text-foreground font-serif text-xl font-normal mb-4 group-hover:text-accent transition-colors">
                  {partner.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">{partner.description}</p>

                <div className="space-y-2 mb-5">
                  {partner.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-center gap-2 text-sm">
                      <span className="text-accent">✓</span>
                      <span className="text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-semibold transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <div className="bg-foreground rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-white font-serif text-2xl md:text-3xl font-normal mb-4">
              Interested in Partnering With Us?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              We welcome collaborations with organizations that share our vision of fostering Indo-Japanese relations.
            </p>
            <a
              href="mailto:japan.centre@woxsen.edu.in"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-foreground font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 border border-accent/50"
            >
              Contact Us for Partnerships
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">Get Involved</span>
          <h2 className="text-foreground font-serif text-3xl md:text-5xl font-normal tracking-wide mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join a vibrant community that celebrates the fusion of Indian and Japanese cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/join"
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 text-base border border-accent/50"
            >
              Join Our Community
            </Link>
            <Link
              href="/events"
              className="border border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/40 font-semibold px-8 py-4 rounded-lg transition-all text-base"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
