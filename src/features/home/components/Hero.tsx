"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { staggerContainer, lineReveal, fadeUp } from '@/lib/animationVariants';

export const Hero = () => {
    const headlineLines = [
        "Define",
        "Your Bold",
        "Aesthetic"
    ];

    return (
        <section className="relative h-[90vh] w-full overflow-hidden bg-background">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeUp}>
                        <Badge variant="neutral" className="mb-6 bg-white/20 text-white backdrop-blur-md border-white/30 px-4 py-1">
                            SS / 2026 COLLECTION
                        </Badge>
                    </motion.div>

                    <div className="mb-8 overflow-hidden">
                        {headlineLines.map((line, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <motion.h1
                                    variants={lineReveal}
                                    className={cn(
                                        "text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase",
                                        line === "Your Bold" && "text-accent underline decoration-4 underline-offset-8"
                                    )}
                                >
                                    {line}
                                </motion.h1>
                            </div>
                        ))}
                    </div>

                    <motion.p
                        variants={fadeUp}
                        className="text-white/80 text-lg md:text-xl font-medium tracking-wide uppercase max-w-xl mb-12"
                    >
                        Experience the fusion of high-performance design and avant-garde luxury. Curated for the modern individual.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                        <Button variant="accent" size="lg" className="group">
                            SHOP COLLECTION
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                            EXPLORE EDITORIAL
                        </Button>
                    </motion.div>
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
