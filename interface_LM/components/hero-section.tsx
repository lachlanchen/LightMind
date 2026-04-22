"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 8
      const y = (clientY / innerHeight - 0.5) * 8
      const transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(" + (-y) + "deg)"
      imageRef.current.style.transform = transform
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative flex flex-col justify-center pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8 fade-up">
              Wearable AI Memory System
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 fade-up" style={{ animationDelay: "0.1s" }}>
              Extend Your Life With AI Glasses.
            </h1>

            <p className="text-base text-muted-foreground max-w-md mb-12 leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
              Blending low-power optical sensing and edge AI, LightMind AI Glasses merge your physical and digital realities, acting as your proactive companion for work, study, and life.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 fade-up" style={{ animationDelay: "0.3s" }}>
              <Link
                href="#preorder"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
              >
                Pre-Order Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center text-sm hover-line py-4"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 fade-up" style={{ animationDelay: "0.2s" }}>
            <div
              ref={imageRef}
              className="relative transition-transform duration-200 ease-out"
            >
              <div className="aspect-square relative">
                <img
                  src="/images/display.png"
                  alt="LightMind Smart Glasses with Display"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
