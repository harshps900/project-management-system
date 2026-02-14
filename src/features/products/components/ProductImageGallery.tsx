"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ProductImageGalleryProps {
    images: string[];
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(idx)}
                            className={cn(
                                "relative w-20 aspect-[3/4] border-2 transition-all shrink-0",
                                activeImage === idx ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}

            {/* Main Image */}
            <div className="relative flex-1 aspect-[1/1.2] bg-secondary overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full"
                    >
                        <Image
                            src={images[activeImage]}
                            alt="Main Product view"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
