"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { staggerContainer, lineReveal, fadeUp } from '@/lib/animationVariants';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

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
                    style={{ y, opacity }}
                    className="relative h-full w-full"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero Aesthetic"
                        fill
                        priority
                        className="object-cover object-[center_20%] md:object-center transition-transform duration-1000"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start"
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
                                        "text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase",
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
