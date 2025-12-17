import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Logo from "@/components/logo"
import localFont from "next/font/local"
import { Geist_Mono, Noto_Sans_JP, Hina_Mincho } from "next/font/google"


const aspekta = localFont({
  src: "../../public/fonts/aspekta/variable/AspektaVF.woff2",
  variable: "--font-sans",
  weight: "100 900",
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const hinaMincho = Hina_Mincho({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans-jp",
  weight: ["100", "300", "400", "500", "700", "900"],
})


export const metadata: Metadata = {
  title: "Woxsen Japan Centre | ウォクセン日本センター",
  description: "Bridging Japan and Global Business Leadership",
  icons: {
    icon: "/images/logos/WHITE LOGO.png",
    apple: "/images/logos/WHITE LOGO.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${aspekta.variable} ${geistMono.variable} ${hinaMincho.variable} ${notoSansJP.variable}`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden body-texture">
        <Logo />
        {children}
      </body>
    </html>
  )
}
