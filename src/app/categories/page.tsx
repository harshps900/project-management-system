"use client";

import React from 'react';
import { categories } from '@/data/mockData';
import { CategoryCard } from '@/features/products/components/CategoryCard';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animationVariants';

export default function CategoriesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <section className="bg-secondary pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
                    >
                        <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                            <span>Browse</span>
                            <span>/</span>
                            <span className="text-primary">All Categories</span>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-primary"
                        >
                            The Library <br className="hidden md:block" /> of Style
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, idx) => (
                        <CategoryCard key={category.id} category={category} index={idx} />
                    ))}
                </div>
            </main>

            {/* Newsletter / CTA */}
            <section className="bg-primary text-white py-24 px-4 md:px-8 text-center overflow-hidden relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Never Miss <br /> a Release
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-12">
                        Subscribe to get notified about new collections and limited drops.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADDRESS"
                            className="flex-1 bg-white/5 border border-white/10 px-6 py-4 focus:outline-none focus:border-white/40 text-[10px] font-black tracking-widest uppercase"
                        />
                        <button className="bg-white text-primary px-12 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95">
                            Join Now
                        </button>
                    </div>
                </motion.div>

                {/* Decorative BG Text */}
                <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black uppercase tracking-tighter text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
                    NEWSLETTER NEWSLETTER NEWSLETTER
                </span>
            </section>
        </div>
    );
}
