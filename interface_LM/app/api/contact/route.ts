import { NextResponse } from "next/server"
import { lightmindContact } from "@/lib/lightmind-config"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const subject = String(body.subject || "").trim()
    const message = String(body.message || "").trim()
    const honey = String(body.company || "").trim()

    if (honey) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      )
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      )
    }

    const formData = new FormData()
    formData.set("name", name)
    formData.set("email", email)
    formData.set("_subject", `[LightMind Contact] ${subject}`)
    formData.set("_replyto", email)
    formData.set("subject", subject)
    formData.set("message", message)

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
      return NextResponse.json(
        { error: "The contact service is unavailable." },
        { status: 502 },
      )
    }

    const result = await response.json().catch(() => null)
    const success =
      result?.success === true ||
      result?.success === "true" ||
      result?.success === 1 ||
      result?.success === "1"

    if (!success) {
      const providerMessage =
        typeof result?.message === "string" ? result.message : null

      const errorMessage =
        providerMessage?.includes("Activate Form") ||
        providerMessage?.includes("needs Activation")
          ? lightmindContact.activationMessage
          : providerMessage || "The contact form could not be delivered."

      return NextResponse.json(
        { error: errorMessage, providerMessage },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully.",
    })
  } catch {
    return NextResponse.json(
      { error: "Unable to submit the form right now." },
      { status: 500 },
    )
  }
}
