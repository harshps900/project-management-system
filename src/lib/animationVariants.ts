import { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth reveal
        },
    },
};

export const clipReveal: Variants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
        clipPath: 'inset(0% 0 0 0)',
        transition: {
            duration: 1.2,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

export const lineReveal: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export const springReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
        },
    },
};
