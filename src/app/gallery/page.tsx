"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import Footer from "@/components/sections/footer"
import PageHeader from "@/components/sections/page-header"
import { Grid } from "react-window"

// Thumbnail component with blur effect
const ThumbnailImage = ({ image, isSelected, onClick }: any) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <button
      className={`relative rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 bg-accent/5 ${isSelected
        ? "w-14 h-14 ring-2 ring-accent scale-110 z-10"
        : "w-10 h-10 opacity-40 hover:opacity-70"
        }`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 animate-pulse" />
      )}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-all duration-300 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="56px"
      />
    </button>
  )
}

// Generate gallery images list from all files
const generateGalleryImages = () => {
  const imageFiles = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "gallery.png", "gallery1.png", "gallery2.png", "gallery3.png", "gallery5.jpg",
    "DSC01139.jpg", "DSC01179.jpg", "DSC01181.jpg", "DSC01200.jpg", "DSC01223.jpg",
    "DSC01236.jpg", "DSC01256.jpg", "DSC01267.jpg", "DSC02343.jpg", "DSC02366.jpg",
    "DSC02369.jpg", "DSC02377.jpg", "DSC02398.jpg", "DSC02419.jpg", "DSC02421.jpg",
    "DSC02425.jpg", "DSC08056.jpg", "DSC08060.jpg", "DSC08063.jpg", "DSC08090.jpg",
    "DSC08095.jpg", "DSC08133.jpg", "DSC08151.jpg", "DSC08171.jpg", "DSC08181.jpg",
    "DSC08183.jpg", "DSC08186.jpg", "DSC08189.jpg", "DSC08192.jpg", "DSC08193.jpg",
    "DSC08195.jpg", "DSC08197.jpg", "DSC08199.jpg", "DSC08202.jpg", "DSC08203.jpg",
    "DSC08205.jpg", "DSC08207.jpg", "DSC08209.jpg", "DSC08211.jpg", "DSC08213.jpg",
    "DSC08215.jpg", "DSC08217.jpg", "DSC08218.jpg", "DSC08222.jpg", "DSC08226.jpg",
    "DSC08230.jpg", "DSC08240.jpg", "DSC08243.jpg", "DSC08250.jpg", "DSC08275.jpg",
    "DSC08281.jpg", "DSC08287.jpg", "DSC08290.jpg", "DSC08297.jpg", "DSC08301.jpg",
    "DSC08309.jpg", "DSC08394.jpg", "MIV00645.jpg", "MIV00661.jpg", "MIV00685.jpg",
    "MIV00694.jpg", "MIV00713.jpg", "MIV00723.jpg", "MIV00737.jpg", "MIV00738.jpg",
    "MIV00750.jpg", "MIV00755.jpg", "MIV00764.jpg", "MIV00767.jpg", "MIV00784.jpg",
    "MIV00788.jpg", "MIV00795.jpg", "MIV00813.jpg", "MIV00819.jpg", "MIV00826.jpg",
    "MIV00832-Pano.jpg", "MIV00845.jpg", "MIV00848.jpg", "MIV00857.jpg", "MIV00864.jpg",
    "MIV00875.jpg", "MIV00882.jpg", "MIV00888.jpg", "MIV00894.jpg", "MIV00896.jpg",
    "MIV00902.jpg", "MIV00912.jpg", "MIV00923.jpg", "MIV00925.jpg", "MIV00930.jpg",
    "MIV00933.jpg", "MIV00941.jpg", "MIV00947.jpg", "MIV00949.jpg", "MIV00958.jpg",
    "MIV00960.jpg", "MIV00962.jpg", "MIV00968.jpg", "MIV00973.jpg", "MIV00975.jpg",
    "MIV00980.jpg", "MIV00984.jpg", "MIV01009.jpg", "MIV01011.jpg", "MIV01018.jpg",
    "MIV01028.jpg", "MIV01030.jpg", "MIV01036.jpg", "MIV01039.jpg", "MIV01043.jpg",
    "MIV01044.jpg", "MIV01050.jpg", "MIV01065.jpg", "mt1.jpg", "mt2.jpg",
    "mt3 (2).jpg", "mt3.jpg", "mt4.jpg", "nara-1.jpg", "nara-2.jpg", "nara-3.jpg"
  ]

  return imageFiles.map((file, idx) => ({
    src: `/images/gallery/${file}`,
    alt: `Gallery Image ${idx + 1}`,
    category: "Events"
  }))
}

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(1200)
  const [windowHeight, setWindowHeight] = useState(800)
  const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false)

  const galleryImages = useMemo(() => generateGalleryImages(), [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate grid dimensions
  const columnCount = windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 3 : 2
  const columnWidth = Math.floor((Math.min(windowWidth - 96, 1280)) / columnCount)
  const rowHeight = columnWidth
  const rowCount = Math.ceil(galleryImages.length / columnCount)

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return
    setLightboxImageLoaded(false)
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
  }, [selectedIndex, galleryImages.length])

  // Navigate to next image
  const goToNext = useCallback(() => {
    if (selectedIndex === null) return
    setLightboxImageLoaded(false)
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
  }, [selectedIndex, galleryImages.length])

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
      setLightboxImageLoaded(false)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedIndex])

  // Grid cell renderer component
  const Cell = ({ columnIndex, rowIndex, style, columnCountProp, setSelectedIndex: setSelected, images }: any) => {
    const index = rowIndex * columnCountProp + columnIndex
    if (index >= images.length) return null

    const image = images[index]
    const [isLoaded, setIsLoaded] = useState(false)

    return (
      <div style={style} className="p-2">
        <div
          className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-accent/5"
          onClick={() => setSelected(index)}
        >
          {/* Blur placeholder background */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 animate-pulse" />
          )}

          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg scale-110'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300" />

          {/* Japanese Corner Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
          <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
        </div>
      </div>
    )
  }

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

          {/* Virtualized Grid */}
          <div className="flex justify-center">
            <Grid
              cellComponent={Cell}
              cellProps={{ columnCountProp: columnCount, setSelectedIndex, images: galleryImages }}
              columnCount={columnCount}
              columnWidth={columnWidth}
              defaultHeight={Math.min(windowHeight - 400, rowHeight * Math.min(rowCount, 4))}
              rowCount={rowCount}
              rowHeight={rowHeight}
              defaultWidth={Math.min(windowWidth - 96, 1280)}
              style={{ margin: "0 auto" }}
            />
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
              {/* Blur placeholder */}
              {!lightboxImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
                </div>
              )}

              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className={`object-contain transition-all duration-500 ${
                  lightboxImageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md scale-95'
                }`}
                onLoad={() => setLightboxImageLoaded(true)}
                priority
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
          <div className="px-6 py-6 overflow-x-auto">
            <div className="flex justify-center items-center gap-3 min-w-max px-4">
              {galleryImages
                .slice(Math.max(0, selectedIndex - 5), Math.min(galleryImages.length, selectedIndex + 6))
                .map((image, idx) => {
                  const actualIdx = Math.max(0, selectedIndex - 5) + idx
                  return (
                    <ThumbnailImage
                      key={actualIdx}
                      image={image}
                      isSelected={actualIdx === selectedIndex}
                      onClick={() => {
                        setLightboxImageLoaded(false)
                        setSelectedIndex(actualIdx)
                      }}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
