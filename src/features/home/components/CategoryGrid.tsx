"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/data/mockData';

export const CategoryGrid = () => {
    return (
        <section className="py-24 bg-white px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-4 text-center md:text-left">
                    <div>
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Categories</span>
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                            Shop by <br className="hidden md:block" /> Collections
                        </h2>
                    </div>
                    <Link href="/shop" className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                        View All collections
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.slice(0, 4).map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden bg-secondary border border-border"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />

                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <span className="text-white/70 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{category.count} Items</span>
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {category.name}
                                </h3>
                                <Link href={`/shop?category=${category.slug}`}>
                                    <button className="bg-white text-primary px-6 py-2 text-[10px] font-black uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
                                        Explore
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
