import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/sections/footer"
import PageHeader from "@/components/sections/page-header"
import { pastEvents } from "@/data/events"
import { ArrowUpRight } from "lucide-react"

export default function EventsPage() {
  return (
    <main className="w-full">
      <PageHeader title="EVENTS & ACTIVITIES" subtitle="Cultural Exchange & Learning Opportunities" watermark="行事" />

      {/* Upcoming Events Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-background texture-overlay">
        <div className="max-w-4xl mx-auto text-center">
          {/* Upcoming Events Header */}
          <div className="mb-12">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              UPCOMING EVENTS
            </span>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-16">
            The Woxsen Japan Centre continues to expand its calendar with engaging academic and cultural events.
            Stay tuned for upcoming collaborations, exchange programs, and celebrations that bring the spirit of Japan to our campus.
          </p>

          {/* Coming Soon */}
          <div className="py-16 px-8 bg-accent/5 rounded-2xl border border-accent/10">
            <div className="text-6xl mb-6">🎌</div>
            <h3 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide mb-4">
              Coming Soon...
            </h3>
            <p className="text-foreground/60 text-base">
              We are preparing exciting events for you. Check back soon!
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          {/* Past Events Header */}
          <div className="mb-16 text-center">
            <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
              PAST EVENTS AND HIGHLIGHTS
            </span>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A look back at the memorable events and activities hosted by Woxsen Japan Centre.
            </p>
          </div>

          {/* Past Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group bg-background rounded-xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.images[0] || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                  {/* Japanese Corner Accents */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-accent/90 text-foreground text-xs font-bold px-3 py-1 rounded-sm">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-foreground/50 text-xs tracking-tight mb-2">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-foreground font-serif text-xl font-normal tracking-wide mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
