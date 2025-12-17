"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const navRef = useRef<HTMLElement>(null)

  // Close menu on scroll or click outside
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll)
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Dynamic link styles - always white now
  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
    const activeStyle = isActive ? "border-b-2 border-current pb-0.5" : ""
    return `text-white hover:text-accent text-sm tracking-tight transition-colors font-semibold ${activeStyle}`
  }

  const getMobileLinkClassName = (href: string) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
    const activeStyle = isActive ? "text-accent" : "text-white"
    return `${activeStyle} text-2xl font-serif tracking-wide hover:text-accent transition-colors`
  }

  // Hamburger bar color - always white
  const hamburgerColor = "bg-white"

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/events", label: "EVENTS" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/team", label: "TEAM" },
    { href: "/jlpt", label: "JLPT" },
    { href: "/join", label: "JOIN US" },
  ]

  return (
    <nav ref={navRef} className="absolute top-6 right-6 z-20 md:top-8 md:right-12">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={getLinkClassName(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden relative w-6 h-5 group z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {/* Top line */}
        <span
          className={`absolute left-0 h-0.5 w-full ${hamburgerColor} transition-all duration-300 ${isMenuOpen
            ? "top-1/2 -translate-y-1/2 rotate-45"
            : "top-0"
            }`}
        />
        {/* Bottom line */}
        <span
          className={`absolute left-0 h-0.5 w-full ${hamburgerColor} transition-all duration-300 ${isMenuOpen
            ? "top-1/2 -translate-y-1/2 -rotate-45"
            : "bottom-0"
            }`}
        />
      </button>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`fixed inset-0 bg-foreground/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="space-y-8 text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={getMobileLinkClassName(link.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
