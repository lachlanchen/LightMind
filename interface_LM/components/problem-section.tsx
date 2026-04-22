"use client"

import { Brain, Lock, Zap, Search, CheckSquare, Users } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "Information Overload",
    description: "Thousands of details across meetings, messages, and environments—lost critical context.",
  },
  {
    icon: Lock,
    title: "Context Is Fragmented",
    description: "Important details split across apps, notes, and memory—slow and inconsistent recall.",
  },
  {
    icon: Zap,
    title: "Always-On Drains Power",
    description: "Conventional capture approaches are compute-heavy and hard to sustain all day.",
  },
  {
    icon: Search,
    title: "Raw Capture Is Unusable",
    description: "Even when recorded, finding one useful moment means scrubbing long, noisy timelines.",
  },
  {
    icon: CheckSquare,
    title: "Follow-Through Breaks",
    description: "Without structured memory support, reminders and next actions are easily missed.",
  },
  {
    icon: Users,
    title: "Teams Need Shared Memory",
    description: "Organizations need practical, low-friction memory tools that fit real operations.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            The Problem Today
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-background p-8 lg:p-10 hover:bg-secondary/50 transition-colors duration-500"
            >
              <problem.icon className="w-6 h-6 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1} />
              <h3 className="text-lg font-medium mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
