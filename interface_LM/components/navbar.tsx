"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "About", href: "#about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="LightMind"
                width={36}
                height={36}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                loading="eager"
                priority
              />
            </div>
            <span className="text-lg font-medium tracking-tight">
              LightMind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover-line"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover-line"
            >
              Contact
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium px-6 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300"
            >
              Pre-Order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[400px] pb-8" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-4 border-t border-border">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg hover:text-muted-foreground transition-colors duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center py-3 text-sm font-medium bg-foreground text-background"
              >
                Pre-Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
