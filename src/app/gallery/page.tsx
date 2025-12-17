"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Footer from "@/components/sections/footer"
import PageHeader from "@/components/sections/page-header"

const galleryImages = [
    {
        src: "/images/gallery/gallery.png",
        alt: "Woxsen Japan Centre",
        category: "Centre"
    },
    {
        src: "/images/gallery/gallery1.png",
        alt: "Cultural Event",
        category: "Events"
    },
    {
        src: "/images/gallery/gallery2.png",
        alt: "Workshop Session",
        category: "Workshop"
    },
    {
        src: "/images/gallery/gallery3.png",
        alt: "Community Gathering",
        category: "Community"
    },
]

export default function GalleryPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    // Navigate to previous image
    const goToPrevious = useCallback(() => {
        if (selectedIndex === null) return
        setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    }, [selectedIndex])

    // Navigate to next image
    const goToNext = useCallback(() => {
        if (selectedIndex === null) return
        setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }, [selectedIndex])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === "ArrowLeft") goToPrevious()
            if (e.key === "ArrowRight") goToNext()
            if (e.key === "Escape") setSelectedIndex(null)
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedIndex, goToPrevious, goToNext])

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [selectedIndex])

    return (
        <main className="w-full">
            <PageHeader title="GALLERY" subtitle="Moments from Our Journey" watermark="写真" />

            {/* Gallery Grid */}
            <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-background">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-accent font-sans text-sm tracking-widest font-bold uppercase mb-4 block">
                            Photo Gallery
                        </span>
                        <h2 className="text-foreground font-serif text-3xl md:text-4xl font-normal tracking-wide mb-4">
                            Capturing Our Moments
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            A visual journey through our cultural events, workshops, and community gatherings
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, idx) => (
                            <div
                                key={idx}
                                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => setSelectedIndex(idx)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300" />

                                {/* Japanese Corner Accents */}
                                <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
                                <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
                                <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
                                <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 z-50 bg-foreground/95 flex flex-col">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <span className="text-white/60 text-sm">
                            {selectedIndex + 1} / {galleryImages.length}
                        </span>
                        <button
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedIndex(null)}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Main Image Area */}
                    <div className="flex-1 flex items-center justify-center px-16 relative">
                        {/* Left Arrow */}
                        <button
                            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={goToPrevious}
                        >
                            ←
                        </button>

                        {/* Image */}
                        <div className="relative w-full max-w-5xl h-[60vh]">
                            <Image
                                src={galleryImages[selectedIndex].src}
                                alt={galleryImages[selectedIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={goToNext}
                        >
                            →
                        </button>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="px-6 py-6">
                        <div className="flex justify-center items-center gap-3">
                            {galleryImages.map((image, idx) => (
                                <button
                                    key={idx}
                                    className={`relative rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 ${idx === selectedIndex
                                        ? "w-14 h-14 ring-2 ring-accent scale-110 z-10"
                                        : "w-10 h-10 opacity-40 hover:opacity-70"
                                        }`}
                                    onClick={() => setSelectedIndex(idx)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    )
}
