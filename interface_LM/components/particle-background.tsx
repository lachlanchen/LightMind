"use client"

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface Circle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const circlesRef = useRef<Circle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  const createParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.min(60, Math.floor((width * height) / 25000))
    const particles: Particle[] = []
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      })
    }
    
    return particles
  }, [])

  const createCircles = useCallback((width: number, height: number) => {
    const circleCount = 6
    const circles: Circle[] = []
    
    for (let i = 0; i < circleCount; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 80 + 40,
        opacity: Math.random() * 0.08 + 0.03,
      })
    }
    
    return circles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.scale(dpr, dpr)
      particlesRef.current = createParticles(window.innerWidth, window.innerHeight)
      circlesRef.current = createCircles(window.innerWidth, window.innerHeight)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      ctx.clearRect(0, 0, width, height)

      // Draw big flowing circles first (background layer)
      circlesRef.current.forEach((circle) => {
        circle.x += circle.vx
        circle.y += circle.vy

        // Boundary wrap for circles
        if (circle.x < -circle.size) circle.x = width + circle.size
        if (circle.x > width + circle.size) circle.x = -circle.size
        if (circle.y < -circle.size) circle.y = height + circle.size
        if (circle.y > height + circle.size) circle.y = -circle.size

        // Draw circle outline
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(200, 200, 200, " + circle.opacity + ")"
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      // Update and draw particles - light gray color
      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction - subtle repel
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 80) {
          const force = (80 - distance) / 80
          particle.vx -= (dx / distance) * force * 0.008
          particle.vy -= (dy / distance) * force * 0.008
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary wrap
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Friction
        particle.vx *= 0.995
        particle.vy *= 0.995

        // Maintain minimum velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed < 0.1) {
          particle.vx += (Math.random() - 0.5) * 0.1
          particle.vy += (Math.random() - 0.5) * 0.1
        }

        // Draw particle - light gray (#cccccc)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(180, 180, 180, " + particle.opacity + ")"
        ctx.fill()

        // Draw connections between nearby particles
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const connDx = particle.x - otherParticle.x
          const connDy = particle.y - otherParticle.y
          const connDistance = Math.sqrt(connDx * connDx + connDy * connDy)

          if (connDistance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const lineOpacity = (1 - connDistance / 100) * 0.12
            ctx.strokeStyle = "rgba(200, 200, 200, " + lineOpacity + ")"
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [createParticles, createCircles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
