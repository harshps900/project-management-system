"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className }) => {
    const variants = {
        success: 'bg-green-100 text-green-800 border-green-200',
        warning: 'bg-amber-100 text-amber-800 border-amber-200',
        info: 'bg-blue-100 text-blue-800 border-blue-200',
        danger: 'bg-red-100 text-red-800 border-red-200',
        neutral: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border',
                variants[variant],
                className
            )}
        >
            {children}
        </motion.span>
    );
};
