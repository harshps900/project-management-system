"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clipReveal } from '@/lib/animationVariants';

interface CategoryCardProps {
    category: {
        id: string;
        name: string;
        slug: string;
        image: string;
        count: number;
    };
    index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
    return (
        <motion.div
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden bg-secondary border border-border"
        >
            <Link href={`/categories/${category.slug}`} className="block h-full">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-75"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2 block">
                            {category.count} Pieces
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                            {category.name}
                        </h3>

                        <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Explore Collection</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/20 m-4 group-hover:w-full group-hover:h-full group-hover:m-0 group-hover:border-white/10 transition-all duration-700" />
            </Link>
        </motion.div>
    );
};
