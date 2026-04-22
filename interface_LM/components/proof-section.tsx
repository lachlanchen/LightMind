"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    period: "Today",
    phase: "Growing",
    title: "From Prototype to AI Agent",
    lines: [
      "Unify physical and digital memory into a proactive, multimodal AI glasses.",
      "Turn cutting-edge optical sensing into a personal assistant that anticipates your needs, in real time."
    ],
  },
  {
    period: "2026",
    phase: "Core Products",
    title: "Engineering Breakthrough",
    lines: [
      "Built and validated two core prototypes: a principle optical module, and our first-generation wearable.",
      "Proved our technology's feasibility and performance at scale."
    ],
  },
  {
    period: "2025",
    phase: "Founding",
    title: "From Lab to Company",
    lines: [
      "Officially incorporated LightMind Tech Limited in Hong Kong.",
      "Transitioned academic research into a commercial venture, focused on building the next generation of AI-powered wearable terminals."
    ],
  },
  {
    period: "2024",
    phase: "Research Origin",
    title: "The Foundation",
    lines: [
      "Published core optical sensing research in Nature, featured in Nature Photonics.",
      "Established world-class technical leadership in AI glasses."
    ],
  },
]

function TimelineItem({ 
  milestone, 
  index, 
  isLast 
}: { 
  milestone: typeof milestones[0]
  index: number
  isLast: boolean 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isLeft = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref}
      className="relative"
    >
      {/* Desktop Layout - Alternating Left/Right */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] gap-4">
        {/* Left Content */}
        <div className={`flex ${isLeft ? 'justify-end' : 'justify-end'}`}>
          {isLeft && (
            <div 
              className={`
                max-w-md text-right pr-8
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
              `}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Large Year with Animation */}
              <div 
                className={`
                  text-6xl lg:text-7xl font-light tracking-tight text-purple-300/60 mb-2
                  transition-all duration-1000 ease-out
                  ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"}
                `}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {milestone.period}
              </div>

              {/* Phase Badge */}
              <div 
                className={`
                  inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4
                  transition-all duration-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${index * 100 + 250}ms` }}
              >
                {milestone.phase}
              </div>

              {/* Title */}
              <h3 
                className={`
                  text-xl lg:text-2xl font-semibold tracking-tight mb-4
                  transition-all duration-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${index * 100 + 350}ms` }}
              >
                {milestone.title}
              </h3>

              {/* Description Lines */}
              {milestone.lines.map((line, lineIndex) => (
                <p 
                  key={lineIndex}
                  className={`
                    text-muted-foreground leading-relaxed mb-2 last:mb-0
                    transition-all duration-500 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${index * 100 + 450 + lineIndex * 100}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Center Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Dot */}
          <div 
            className={`
              relative z-10 w-5 h-5 rounded-full border-2 border-foreground bg-background
              transition-all duration-500 ease-out
              ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {index === 0 && isVisible && (
              <>
                <div className="absolute inset-0 rounded-full bg-foreground/20 animate-ping" />
                <div className="absolute inset-1 rounded-full bg-foreground animate-pulse" />
              </>
            )}
          </div>
          
          {/* Vertical Line */}
          {!isLast && (
            <div 
              className={`
                w-px flex-1 bg-gradient-to-b from-border to-border/30 origin-top
                transition-transform duration-1000 ease-out
                ${isVisible ? "scale-y-100" : "scale-y-0"}
              `}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            />
          )}
        </div>

        {/* Right Content */}
        <div className={`flex ${!isLeft ? 'justify-start' : 'justify-start'}`}>
          {!isLeft && (
            <div 
              className={`
                max-w-md text-left pl-8 pb-20
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
              `}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Large Year with Animation */}
              <div 
                className={`
                  text-6xl lg:text-7xl font-light tracking-tight text-purple-300/60 mb-2
                  transition-all duration-1000 ease-out
                  ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"}
                `}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {milestone.period}
              </div>

              {/* Phase Badge */}
              <div 
                className={`
                  inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4
                  transition-all duration-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${index * 100 + 250}ms` }}
              >
                {milestone.phase}
              </div>

              {/* Title */}
              <h3 
                className={`
                  text-xl lg:text-2xl font-semibold tracking-tight mb-4
                  transition-all duration-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${index * 100 + 350}ms` }}
              >
                {milestone.title}
              </h3>

              {/* Description Lines */}
              {milestone.lines.map((line, lineIndex) => (
                <p 
                  key={lineIndex}
                  className={`
                    text-muted-foreground leading-relaxed mb-2 last:mb-0
                    transition-all duration-500 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${index * 100 + 450 + lineIndex * 100}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
          {isLeft && <div className="pb-20" />}
        </div>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className="md:hidden grid grid-cols-[40px_1fr] gap-4">
        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          <div 
            className={`
              relative z-10 w-4 h-4 rounded-full border-2 border-foreground bg-background
              transition-all duration-500 ease-out
              ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {index === 0 && isVisible && (
              <>
                <div className="absolute inset-0 rounded-full bg-foreground/20 animate-ping" />
                <div className="absolute inset-1 rounded-full bg-foreground animate-pulse" />
              </>
            )}
          </div>
          {!isLast && (
            <div 
              className={`
                w-px flex-1 bg-gradient-to-b from-border to-border/30 origin-top
                transition-transform duration-1000 ease-out
                ${isVisible ? "scale-y-100" : "scale-y-0"}
              `}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            />
          )}
        </div>

        {/* Content */}
        <div 
          className={`
            pb-12
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${index * 100 + 150}ms` }}
        >
          {/* Large Year */}
          <div 
            className={`
              text-4xl font-light tracking-tight text-purple-300/60 mb-1
              transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"}
            `}
            style={{ transitionDelay: `${index * 100 + 100}ms` }}
          >
            {milestone.period}
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            {milestone.phase}
          </div>
          <h3 className="text-lg font-semibold tracking-tight mb-3">
            {milestone.title}
          </h3>
          {milestone.lines.map((line, lineIndex) => (
            <p 
              key={lineIndex}
              className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProofSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The LightMind Story
          </h2>
        </div>

        {/* Vertical Timeline - Centered with Alternating */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
