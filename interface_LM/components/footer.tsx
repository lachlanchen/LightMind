import Link from "next/link"
import Image from "next/image"
import { lightmindProducts } from "@/lib/lightmind-config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="LightMind"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">LightMind</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Always-on AI wearable for memory, recall, and better decisions.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Products */}
              <div>
                <h4 className="text-sm font-semibold mb-5 text-foreground">Products</h4>
                <ul className="space-y-3">
                  {lightmindProducts.map((product) => (
                    <li key={product.id}>
                      <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {product.displayName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold mb-5 text-foreground">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm font-semibold mb-5 text-foreground">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} LightMind Tech Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
