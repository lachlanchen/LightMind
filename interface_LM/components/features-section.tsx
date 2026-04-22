'use client'

import { Eye, Brain, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const features = [
  {
    icon: Eye,
    number: "01",
    title: "Low-Power Optical Sensing",
    description: "LightMind modules encode useful context at the edge, reducing downstream compute, latency, and battery burden.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Structured Memory Cues",
    description: "The system organizes semantic cues into a searchable memory graph for recap, recall, and reminders.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Real-time Actions",
    description: "Names, translation cues, reminders, and next actions surface in real time when you need them.",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology" className="py-12 lg:py-16 border-t border-border scroll-mt-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Header — centered */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Core Technology
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            A new soul that lives with you
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            To truly change your life, you need an AI that sees with you, remembers your life, and learns to understand you.
          </p>
        </div>

        {/* Video + Feature List */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Video */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[500px]">
            <video
              src="/videos/features-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/features-hero.jpg"
            />
          </div>

          {/* Right — Feature cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group flex gap-5 p-5 rounded-lg border border-border/50 hover:border-border hover:bg-secondary/30 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon block */}
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-secondary/50 flex flex-col items-center justify-center gap-0.5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-[10px] font-medium opacity-60">{feature.number}</span>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-semibold mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
