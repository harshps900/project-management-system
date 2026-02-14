"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { setCartOpen } from '@/features/cart/cartSlice';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dispatch = useDispatch();

    // Get cart items count from Redux
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4',
                isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-none flex items-center justify-center">
                        <span className="text-white font-bold text-xl uppercase">M</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-gradient hidden sm:block uppercase">
                        ModernCart
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Shop', 'Categories', 'About'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                            className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-accent transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:flex items-center bg-secondary rounded-none px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary transition-all shrink">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            className="bg-transparent border-none focus:outline-none text-[10px] font-bold tracking-widest ml-2 w-24 lg:w-48 placeholder:text-muted-foreground/50 uppercase"
                        />
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                        onClick={() => dispatch(setCartOpen(true))}
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[9px] font-bold flex items-center justify-center rounded-none">
                                {cartCount}
                            </span>
                        )}
                    </Button>

                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <User className="w-5 h-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 glass border-t border-border p-4 md:hidden flex flex-col gap-4"
                    >
                        {['Home', 'Shop', 'Categories', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="text-sm font-bold uppercase tracking-widest text-foreground p-2 hover:bg-secondary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="flex items-center bg-secondary rounded-none px-3 py-3 mt-2">
                            <Search className="w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                className="bg-transparent border-none focus:outline-none text-xs font-bold tracking-widest ml-2 w-full uppercase"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
