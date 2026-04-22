"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, ArrowRight } from "lucide-react"
import { lightmindContact } from "@/lib/lightmind-config"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "lightmind@lightmind.art",
    href: "mailto:lightmind@lightmind.art",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Hong Kong",
    href: "https://maps.google.com/?q=Hong+Kong",
  },
] as const

export function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null)
  const [filled, setFilled] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">(
    "idle",
  )
  const [statusMessage, setStatusMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    const inputData = new FormData(form)
    const name = String(inputData.get("name") || "").trim()
    const email = String(inputData.get("email") || "").trim()
    const subject = String(inputData.get("subject") || "").trim()
    const message = String(inputData.get("message") || "").trim()
    const company = String(inputData.get("company") || "").trim()

    setIsSubmitting(true)
    setSubmitted("idle")
    setStatusMessage("")

    try {
      const formData = new FormData()
      formData.set("name", name)
      formData.set("email", email)
      formData.set("_replyto", email)
      formData.set("_subject", `[LightMind Contact] ${subject}`)
      formData.set("subject", subject)
      formData.set("message", message)
      formData.set("company", company)

      Object.entries(lightmindContact.extraFields).forEach(([key, value]) => {
        formData.set(key, value)
      })

      const response = await fetch(lightmindContact.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("The contact service is unavailable right now.")
      }

      const result = await response.json().catch(() => null)
      const success =
        result?.success === true ||
        result?.success === "true" ||
        result?.success === 1 ||
        result?.success === "1"

      if (!success) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "We could not submit your message.",
        )
      }

      setSubmitted("success")
      setStatusMessage(
        "Message sent successfully. We will get back to you at the email address you provided.",
      )
      setFilled({})
      formRef.current?.reset()
    } catch (error) {
      const fallbackMessage =
        error instanceof Error ? error.message : "We could not send your message."
      const friendlyMessage =
        fallbackMessage.includes("Activate Form") ||
        fallbackMessage.includes("needs Activation")
          ? lightmindContact.activationMessage
          : fallbackMessage

      setSubmitted("error")
      setStatusMessage(
        friendlyMessage ||
          `We could not send the message right now. Please email ${lightmindContact.email} instead.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBlur = (field: string, value: string) => {
    setFocused(null)
    setFilled((prev) => ({ ...prev, [field]: value.length > 0 }))
  }

  const isFloating = (field: string) => focused === field || filled[field]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 lg:py-24 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {"Let's talk."}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Whether you are interested in pre-ordering, partnering, or just
              want to learn more, we would love to hear from you.
            </p>

            <ul className="space-y-8">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group flex items-start gap-4">
                    <div className="mt-0.5 h-9 w-9 shrink-0 border border-border flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <item.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium group-hover:underline underline-offset-4 transition-all duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                {(["Name", "Email"] as const).map((field) => (
                  <div key={field} className="relative">
                    <label
                      htmlFor={field.toLowerCase()}
                      className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                        isFloating(field)
                          ? "top-0 text-[10px] tracking-widest uppercase text-muted-foreground"
                          : "top-4 text-sm text-muted-foreground"
                      }`}
                    >
                      {field}
                    </label>
                    <input
                      id={field.toLowerCase()}
                      name={field.toLowerCase()}
                      type={field === "Email" ? "email" : "text"}
                      required
                      onFocus={() => setFocused(field)}
                      onBlur={(e) => handleBlur(field, e.target.value)}
                      className="w-full bg-transparent border-b border-border pt-6 pb-2 text-sm outline-none focus:border-foreground transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFloating("Subject")
                      ? "top-0 text-[10px] tracking-widest uppercase text-muted-foreground"
                      : "top-4 text-sm text-muted-foreground"
                  }`}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  onFocus={() => setFocused("Subject")}
                  onBlur={(e) => handleBlur("Subject", e.target.value)}
                  className="w-full bg-transparent border-b border-border pt-6 pb-2 text-sm outline-none focus:border-foreground transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFloating("Message")
                      ? "top-0 text-[10px] tracking-widest uppercase text-muted-foreground"
                      : "top-4 text-sm text-muted-foreground"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  onFocus={() => setFocused("Message")}
                  onBlur={(e) => handleBlur("Message", e.target.value)}
                  className="w-full bg-transparent border-b border-border pt-6 pb-2 text-sm outline-none focus:border-foreground transition-colors duration-300 resize-none"
                />
              </div>

              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitted === "success"
                      ? "Message Sent"
                      : "Send Message"}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {statusMessage ? (
                  <p
                    className={`text-sm leading-relaxed ${
                      submitted === "error"
                        ? "text-red-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
