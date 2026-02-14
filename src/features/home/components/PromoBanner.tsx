"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const PromoBanner = () => {
    return (
        <section className="py-24 bg-accent overflow-hidden relative">
            {/* Decorative text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 opacity-10 pointer-events-none select-none overflow-hidden">
                <span className="text-[15rem] font-black leading-none text-white whitespace-nowrap uppercase tracking-tighter">
                    SALE SALE SALE SALE
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
                    >
                        Spring / Summer <br /> Opening Sale
                    </motion.h2>
                    <p className="text-white/90 text-[10px] font-black uppercase tracking-[0.3em] mb-8 italic">
                        Up to 40% off on all avant-garde collections. Limited time only.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button variant="primary" size="lg" className="bg-white text-primary border-none hover:bg-white/90">
                            SHOP THE SALE
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent">
                            MEMBERS EARLY ACCESS
                        </Button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, rotate: -10, y: 50 }}
                    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                    viewport={{ once: true }}
                    className="relative h-96 w-64 border-4 border-white hidden lg:block"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485230895905-ec17bd36b7c5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center m-2 shadow-2xl" />
                    <div className="absolute -bottom-4 -right-4 bg-white text-accent p-4 font-black text-xl uppercase tracking-tighter shadow-xl">
                        40% OFF
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
