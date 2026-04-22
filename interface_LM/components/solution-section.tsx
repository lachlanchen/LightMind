"use client"

import { Camera, Database, Cpu } from "lucide-react"

const solutions = [
  {
    icon: Camera,
    number: "01",
    title: "Low-Power Optical Sensing",
    description: "LightMind modules encode useful context at the edge, reducing downstream compute, latency, and battery burden.",
  },
  {
    icon: Database,
    number: "02",
    title: "Structured Memory Cues",
    description: "The system organizes semantic cues into a searchable memory graph for recap, recall, and reminders.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Always-On Assistant",
    description: "Device, app, and cloud workflows turn first-person context into decision support that is practical in everyday use.",
  },
]

export function SolutionSection() {
  return (
    <section id="technology" className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            The LightMind Solution
          </h2>
        </div>

        {/* Solutions */}
        <div className="space-y-0 divide-y divide-border">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-8 py-16 first:pt-0 last:pb-0"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-sm text-muted-foreground">{solution.number}</span>
              </div>

              {/* Icon */}
              <div className="lg:col-span-2">
                <solution.icon className="w-8 h-8" strokeWidth={1} />
              </div>

              {/* Content */}
              <div className="lg:col-span-8">
                <h3 className="text-2xl lg:text-3xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
