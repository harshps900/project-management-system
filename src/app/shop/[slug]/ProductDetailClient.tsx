"use client";

import React from 'react';
import { ProductImageGallery } from '@/features/products/components/ProductImageGallery';
import { ProductDetails } from '@/features/products/components/ProductDetails';
import { ProductCard } from '@/features/products/components/ProductCard';
import { motion } from 'framer-motion';

import { Product } from '@/types';

interface ProductDetailClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    return (
        <div className="bg-background min-h-screen">
            {/* Breadcrumbs (Desktop) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 hidden md:block">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                    <span>/</span>
                    <span>{product.category}</span>
                    <span>/</span>
                    <span className="text-primary">{product.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24">

                    {/* Left: Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProductImageGallery images={[product.image]} />
                    </motion.div>

                    {/* Right: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProductDetails product={product} />
                    </motion.div>
                </div>
            </div>

            {/* Recommended Section */}
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 border-t border-border mt-8 md:mt-12 bg-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4">
                            <div>
                                <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 block italic">Curated Selection</span>
                                <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                                    Related <br /> Pieces
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
