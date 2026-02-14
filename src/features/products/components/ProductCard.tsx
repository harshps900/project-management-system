"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useDispatch } from 'react-redux';
import { addItem, setCartOpen } from '@/features/cart/cartSlice';
import { fadeUp, clipReveal } from '@/lib/animationVariants';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        slug: string;
        badges?: string[];
    };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent, size?: string) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            quantity: 1
        }));
        dispatch(setCartOpen(true));
    };

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
            className="group relative bg-background border border-border overflow-hidden shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-shadow duration-500"
        >
            <Link href={`/shop/${product.slug}`} className="block">
                {/* Image Container */}
                <motion.div
                    variants={clipReveal}
                    className="relative aspect-[3/4] overflow-hidden bg-secondary"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-20">
                        <Button
                            variant="accent"
                            size="icon"
                            className="h-12 w-12 rounded-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                            onClick={(e) => handleAddToCart(e)}
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="primary"
                            size="icon"
                            className="h-12 w-12 rounded-none border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
                            onClick={(e) => { e.stopPropagation(); }}
                        >
                            <Eye className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>

                {/* Info */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-accent">{product.category}</p>
                        <p className="text-sm font-black text-foreground">${product.price}</p>
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors truncate">
                        {product.name}
                    </h3>

                    {/* Quick Add with improved slide-up */}
                    <div className="relative h-0 group-hover:h-12 transition-all duration-500 overflow-hidden">
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quick Add +</span>
                            <div className="flex gap-1">
                                {['S', 'M', 'L', 'XL'].map((size, idx) => (
                                    <motion.span
                                        key={size}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={(e) => handleAddToCart(e, size)}
                                        className="text-[9px] font-bold w-6 h-6 flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-all cursor-pointer uppercase"
                                    >
                                        {size}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
