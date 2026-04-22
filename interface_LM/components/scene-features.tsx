"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const scenes = [
  {
    id: "fitness",
    title: "Fitness Companion, Real-Time",
    subtitle: "Performance tracking & smart health reminders.",
    image: "/images/scene-fitness.png",
  },
  {
    id: "learning",
    title: "Smart Learning Co-Pilot",
    subtitle: "Instant lecture summaries, focus on learning.",
    image: "/images/scene-learning.png",
  },
  {
    id: "meeting",
    title: "Effortless Meeting Intelligence",
    subtitle: "Auto summaries & action items, effortless productivity.",
    image: "/images/scene-meeting.png",
  },
  {
    id: "fashion",
    title: "AI Stylist, Tailored to You",
    subtitle: "Proactive style recommendations, personalized to your taste.",
    image: "/images/scene-fashion.png",
  },
]

export function SceneFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % scenes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + scenes.length) % scenes.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % scenes.length)
  }

  return (
    <section id="features" ref={sectionRef} className="py-16 lg:py-24 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Think Ahead<br />Remember More
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It&apos;s your 24/7 your ultimate deep-thinking, decision-making companion.
          </p>
        </div>

        {/* Main Content - Image + Text Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Container */}
          <div className="relative group">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Previous scene"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Next scene"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/30">
              {scenes.map((scene, index) => (
                <img
                  key={scene.id}
                  src={scene.image}
                  alt={scene.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-700",
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {scenes.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1 rounded-full flex-1 transition-all duration-500",
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            {/* Tab Navigation */}
            <div className="mb-10">
              <div className="inline-flex gap-1 p-1 bg-secondary/50 rounded-full">
                {scenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {scene.id.charAt(0).toUpperCase() + scene.id.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {scenes.map((scene, index) => (
              <div
                key={scene.id}
                className={cn(
                  "transition-all duration-500",
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute pointer-events-none"
                )}
              >
                {index === activeIndex && (
                  <>
                    {/* Scene Number */}
                    <span className="inline-block text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      0{index + 1} / 0{scenes.length}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-4">
                      {scene.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {scene.subtitle}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
