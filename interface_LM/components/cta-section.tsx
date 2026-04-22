"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, Briefcase, Cpu, MessageSquare } from "lucide-react"

const actions = [
  {
    icon: GraduationCap,
    title: "Explore Consumer Devices",
    description: "Choose O1, LightMind Display, M1, or M1 Pro for everyday memory assistance.",
  },
  {
    icon: Briefcase,
    title: "Deploy for Teams",
    description: "Use device + subscription plans for teams that need consistent recall.",
  },
  {
    icon: Cpu,
    title: "Pilot the Optical Module",
    description: "Evaluate low-power sensing modules for robotics and edge-AI products.",
  },
  {
    icon: MessageSquare,
    title: "Start Integration",
    description: "Work with LightMind on evaluation kits and integration pathways.",
  },
]

export function CTASection() {
  return (
    <section id="preorder" className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            Take the Next Step
          </h2>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-16">
          {actions.map((action, index) => (
            <div
              key={index}
              className="group bg-background p-8 lg:p-10 hover:bg-secondary/50 transition-colors duration-500 cursor-pointer"
            >
              <action.icon className="w-6 h-6 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-500">
                {action.title}
              </h3>
              <p className="text-muted-foreground mb-6">{action.description}</p>
              <span className="inline-flex items-center text-sm hover-line">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center py-12 lg:py-16 border-t border-border">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            To the era of soul computing
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Join the early access program and be among the first to experience always-on AI memory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="#"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              Reserve Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-2xl font-light">$200</span>
              <span className="text-muted-foreground">deposit, fully refundable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
