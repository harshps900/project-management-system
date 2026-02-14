"use client";

import React from 'react';
import { ProductCard } from '@/features/products/components/ProductCard';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animationVariants';
import Link from 'next/link';

import { Category, Product } from '@/types';

interface CategoryDetailClientProps {
    category: Category;
    filteredProducts: Product[];
}

export default function CategoryDetailClient({ category, filteredProducts }: CategoryDetailClientProps) {
    return (
        <div className="bg-background min-h-screen pb-32">
            {/* Category Hero */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-secondary">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover brightness-50"
                    />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="max-w-4xl w-full text-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4 md:space-y-6"
                        >
                            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                                <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                                <span className="text-white/20">/</span>
                                <span className="text-white">{category.name}</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none"
                            >
                                {category.name}
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] max-w-lg mx-auto"
                            >
                                Exploring the intersection of architectural form and refined craftsmanship within the {category.name} collection.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Text - Hidden on mobile */}
                <div className="absolute left-8 bottom-8 hidden lg:block">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 vertical-text origin-left transform -rotate-90">
                        {category.count} CURATED PIECES
                    </span>
                </div>
            </section>

            {/* Product Feed */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="py-32 text-center bg-white border border-border">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">No pieces currently in this collection.</h3>
                        <Link href="/shop">
                            <button className="mt-8 px-12 py-4 bg-primary text-white text-[10px] font-black tracking-widest uppercase hover:bg-accent transition-all">
                                EXPLORE ALL
                            </button>
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
