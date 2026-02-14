"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden bg-background">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Badge variant="neutral" className="mb-6 bg-white/20 text-white backdrop-blur-md border-white/30 px-4 py-1">
                        SS / 2026 COLLECTION
                    </Badge>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase max-w-3xl mb-8">
                        Define <br />
                        <span className="text-accent underline decoration-4 underline-offset-8">Your Bold</span> <br />
                        Aesthetic
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide uppercase max-w-xl mb-12">
                        Experience the fusion of high-performance design and avant-garde luxury. Curated for the modern individual.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="accent" size="lg" className="group">
                            SHOP COLLECTION
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                            EXPLORE EDITORIAL
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Side Decorative Text */}
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 rotate-90 hidden lg:block">
                <span className="text-9xl font-black text-white/5 uppercase tracking-[0.2em] pointer-events-none select-none">
                    MODERNCART
                </span>
            </div>
        </section>
    );
};
