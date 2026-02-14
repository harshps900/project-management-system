import Link from "next/link";
import { Hero } from "@/features/home/components/Hero";
import { CategoryGrid } from "@/features/home/components/CategoryGrid";
import { PromoBanner } from "@/features/home/components/PromoBanner";
import { ProductCard } from "@/features/products/components/ProductCard";
import { featuredProducts } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Category Grid */}
      <CategoryGrid />

      {/* 3. Featured Products Section */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-4 text-center md:text-left">
            <div>
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">New Drop</span>
              <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                Featured <br className="hidden md:block" /> Pieces
              </h2>
            </div>
            <div className="flex gap-4">
              <Link href="/shop" className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                Explore All
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Promo Banner */}
      <PromoBanner />

      {/* 5. Editorial / Testimonial Section */}
      <section className="py-20 md:py-32 bg-secondary px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-none z-0 hidden lg:block" />
            <h2 className="text-4xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.85] relative z-10">
              The <br /> Collective <br /> Voice
            </h2>
            <div className="mt-8 md:mt-12 space-y-8 flex flex-col items-center lg:items-start">
              <div className="border-l-0 lg:border-l-4 border-accent pl-0 lg:pl-8 py-2">
                <div className="flex gap-1 mb-4 text-accent justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-base md:text-lg font-bold text-primary uppercase tracking-tight leading-snug italic mb-4 max-w-md mx-auto lg:mx-0">
                  "Uncompromising quality and a vision that truly defines modern luxury. ModernCart is more than a store; it's a statement."
                </p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">— ADRIAN VOORHEES, VOGUE EDITORIAL</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center border-8 border-white shadow-2xl skew-y-3" />
            <div className="absolute inset-0 border border-primary/10 translate-x-10 translate-y-10 -z-10" />
          </div>
        </div>
      </section>

      {/* 6. Bold Footer CTA */}
      <section className="py-16 md:py-24 bg-primary px-4 text-center">
        <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 italic outline-text sm:not-italic">
          Join the Movement
        </h2>
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-12 max-w-xl mx-auto leading-relaxed">
          Be the first to experience our seasonal drops and exclusive avant-garde events.
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="bg-transparent border-2 border-white/20 text-white px-6 py-4 rounded-none text-[10px] font-black tracking-[0.2em] focus:outline-none focus:border-white w-full uppercase"
          />
          <Button variant="accent" size="lg" className="px-10">SIGN UP</Button>
        </div>
      </section>
    </div>
  );
}
