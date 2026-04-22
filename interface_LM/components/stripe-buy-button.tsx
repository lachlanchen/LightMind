"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

type StripeBuyButtonProps = {
  buyButtonId: string
  publishableKey: string
}

export function StripeBuyButton({
  buyButtonId,
  publishableKey,
}: StripeBuyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    containerRef.current.innerHTML = `<stripe-buy-button buy-button-id="${buyButtonId}" publishable-key="${publishableKey}"></stripe-buy-button>`

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [buyButtonId, publishableKey])

  return (
    <>
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
      <div
        ref={containerRef}
        suppressHydrationWarning
      />
    </>
  )
}
