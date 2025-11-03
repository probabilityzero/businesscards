"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Moon, Sun } from "lucide-react"
import { businessCardData } from "@/data/business-card"

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  messageCircle: MessageCircle,
}

export default function BusinessCard() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const getGoogleMapsUrl = (location: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(location)}`
  }

  const getWhatsAppUrl = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    return `https://wa.me/${cleaned}`
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 p-2 rounded-lg hover:bg-secondary/80 transition-colors z-50"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Profile Image Container with Shadow and Wavy Overlay */}
          <div className="relative mb-0">
            {/* Image with shadow */}
            <img
              src={businessCardData.image || "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6ef9d96575065.5eb190924edcf.jpg?height=400&width=400"}
              alt={businessCardData.name}
              className="w-full aspect-square sm:aspect-auto sm:h-80 object-cover rounded-t-3xl shadow-lg"
            />
          </div>

          {/* Info Section */}
          <div className="relative bg-secondary text-secondary-foreground px-6 sm:px-8 pt-10 pb-8 shadow-2xl rounded-b-3xl">

            {/* Name and Title */}
            <div className="text-center space-y-2 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold">{businessCardData.name}</h1>
              <p className="text-lg sm:text-xl font-medium opacity-85">{businessCardData.title}</p>
            </div>

            {/* Company Name */}
            <div className="text-center mb-8">
              <p className="text-lg sm:text-md font-semibold opacity-70 tracking-widest uppercase">
                {businessCardData.company}
              </p>
            </div>

            {/* Contact Info - Left Aligned with Icons */}
            <div className="space-y-3 mb-10 max-w-sm mx-auto">

              {/* Phone */}
              <a
                href={`tel:${businessCardData.phone}`}
                className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">{businessCardData.phone}</span>
              </a>
              
              {/* Email */}
              <a
                href={`mailto:${businessCardData.email}`}
                className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
              >
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">{businessCardData.email}</span>
              </a>

              {/* Location */}
              <a
                href={getGoogleMapsUrl(businessCardData.location)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
              >
                <MapPin size={20} className="flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">{businessCardData.location}</span>
              </a>
            </div>

            {/* Social Links - Centered */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-secondary-foreground/20">
              {businessCardData.social.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                const finalUrl = link.icon === "messageCircle" ? getWhatsAppUrl(businessCardData.phone) : link.url

                return (
                  <a
                    key={link.name}
                    href={finalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                    aria-label={link.name}
                    title={link.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
