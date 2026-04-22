"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { StripeBuyButton } from "@/components/stripe-buy-button"
import {
  lightmindProducts,
  lightmindStripePublishableKey,
} from "@/lib/lightmind-config"

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const activeProduct = lightmindProducts[activeIndex]

  useEffect(() => {
    setCheckoutOpen(false)
  }, [activeIndex])

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? lightmindProducts.length - 1 : prev - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === lightmindProducts.length - 1 ? 0 : prev + 1,
    )
  }

  return (
    <section
      id="products"
      className="py-12 lg:py-16 border-t border-border scroll-mt-20"
    >
      <div id="preorder" className="scroll-mt-20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header - Centered */}
        <div className="text-center mb-6">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Product Lineup
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get Your LightMind Device
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore and enjoy your early bird experience.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-2">
          {/* Image with Navigation Arrows */}
          <div className="relative aspect-square bg-secondary/30 group">
            <img
              key={activeProduct.id}
              src={activeProduct.image}
              alt={activeProduct.displayName}
              className="w-full h-full object-contain p-8 lg:p-12 transition-opacity duration-500"
            />
            
            {/* Inline Navigation Arrows on Image */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div key={activeProduct.id}>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3">
              {activeProduct.tagline}
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
              {activeProduct.displayName}
            </h3>
            <div className="mb-6 border border-border bg-background shadow-[0_18px_50px_rgba(23,23,23,0.06)]">
              <div className="border-b border-border bg-secondary/40 px-5 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Ready to order
                </p>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {activeProduct.legacyCheckoutName}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                      {activeProduct.price}
                    </p>
                  </div>
                  <div className="shrink-0 border border-border px-3 py-2 text-right">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Checkout
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Stripe Secure
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                  <div className="flex items-center gap-2 border border-border bg-secondary/30 px-3 py-2">
                    <ShieldCheck className="h-4 w-4 text-foreground" />
                    <span>Official pricing</span>
                  </div>
                  <div className="flex items-center gap-2 border border-border bg-secondary/30 px-3 py-2">
                    <LockKeyhole className="h-4 w-4 text-foreground" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2 border border-border bg-secondary/30 px-3 py-2">
                    <CreditCard className="h-4 w-4 text-foreground" />
                    <span>Cards and wallets</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setCheckoutOpen((prev) => !prev)}
                    className="inline-flex min-h-12 flex-1 items-center justify-center border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:opacity-90"
                  >
                    {checkoutOpen ? "Hide checkout" : "Buy now"}
                  </button>
                  <Link
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-secondary/60"
                  >
                    Contact Sales
                  </Link>
                </div>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    checkoutOpen ? "mt-5 max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div
                    className="border border-border bg-white p-3 shadow-[0_16px_40px_rgba(23,23,23,0.05)]"
                    aria-label={`Direct checkout for ${activeProduct.legacyCheckoutName}`}
                    title={`Direct checkout for ${activeProduct.legacyCheckoutName}`}
                  >
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Complete your purchase
                    </p>
                    <StripeBuyButton
                      key={activeProduct.buyButtonId}
                      buyButtonId={activeProduct.buyButtonId}
                      publishableKey={lightmindStripePublishableKey}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {activeProduct.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 text-sm border border-border"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product Selector - Hover to switch */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {lightmindProducts.map((product, index) => (
            <button
              key={product.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative p-4 lg:p-6 text-left transition-all duration-300 bg-background",
                index === activeIndex
                  ? "bg-secondary/50"
                  : "hover:bg-secondary/30"
              )}
            >
              <div className="aspect-square mb-3 relative">
                <img
                  src={product.image}
                  alt={product.displayName}
                  className={cn(
                    "w-full h-full object-contain transition-all duration-300",
                    index === activeIndex ? "opacity-100 scale-105" : "opacity-50 hover:opacity-75"
                  )}
                />
              </div>
              <p className="text-sm font-medium">{product.displayName}</p>
              <p className="text-xs text-muted-foreground mt-1">{product.tagline}</p>
              <p className="text-sm font-medium mt-2 text-foreground">{product.price}</p>
              
              {index === activeIndex && (
                <div className="absolute top-0 left-0 right-0 h-px bg-foreground" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {lightmindProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-foreground w-6"
                  : "bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
