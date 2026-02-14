"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        badges?: string[];
    };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-background border border-border overflow-hidden"
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        {product.badges.map((badge) => (
                            <Badge key={badge} variant="accent" className="bg-accent text-white border-none py-1 px-3">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Hover Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <Button variant="accent" size="icon" className="h-12 w-12 rounded-none">
                        <ShoppingCart className="w-5 h-5" />
                    </Button>
                    <Button variant="primary" size="icon" className="h-12 w-12 rounded-none border border-white/20">
                        <Eye className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Info */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-accent">{product.category}</p>
                    <p className="text-sm font-black text-foreground">${product.price}</p>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors truncate">
                    {product.name}
                </h3>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quick Add +</span>
                    <div className="flex gap-1">
                        {['S', 'M', 'L', 'XL'].map(size => (
                            <span key={size} className="text-[9px] font-bold w-6 h-6 flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors cursor-pointer uppercase">{size}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
