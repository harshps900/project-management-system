"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { setCartOpen, removeItem, updateQuantity } from '@/features/cart/cartSlice';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export const CartDrawer = () => {
    const dispatch = useDispatch();
    const { items, totalAmount, isOpen } = useSelector((state: RootState) => state.cart);

    const toggleDrawer = () => dispatch(setCartOpen(false));

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleDrawer}
                        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-accent" />
                                <h2 className="text-xl font-black uppercase tracking-tighter">Your Bag</h2>
                                <span className="text-[10px] font-bold bg-secondary px-2 py-1 ml-2">
                                    {items.reduce((acc, item) => acc + item.quantity, 0)} ITEMS
                                </span>
                            </div>
                            <button onClick={toggleDrawer} className="p-2 hover:bg-secondary transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {items.length > 0 ? (
                                <div className="space-y-8">
                                    {items.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex gap-6 group">
                                            {/* Item Image */}
                                            <div className="relative w-24 aspect-[3/4] bg-secondary shrink-0 overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Item Details */}
                                            <div className="flex flex-col justify-between flex-1 py-1">
                                                <div>
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h3 className="text-[11px] font-black uppercase tracking-widest text-primary leading-tight">
                                                            {item.name}
                                                        </h3>
                                                        <button
                                                            onClick={() => dispatch(removeItem({ id: item.id, size: item.size }))}
                                                            className="text-muted-foreground hover:text-accent transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                                                        <span>Size: {item.size || 'N/A'}</span>
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between border border-border p-1 w-24">
                                                    <button
                                                        onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, delta: -1 }))}
                                                        className="w-6 h-6 flex items-center justify-center hover:bg-secondary transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-[10px] font-black">{item.quantity}</span>
                                                    <button
                                                        onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, delta: 1 }))}
                                                        className="w-6 h-6 flex items-center justify-center hover:bg-secondary transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <ShoppingBag className="w-16 h-16 text-muted-foreground/20 mb-6" />
                                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Your bag is empty</h3>
                                    <Button
                                        variant="outline"
                                        className="mt-8 border-primary/20"
                                        onClick={toggleDrawer}
                                    >
                                        START SHOPPING
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-8 border-t border-border bg-secondary/30">
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span>${totalAmount}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                        <span>Shipping</span>
                                        <span className="text-accent italic">Complimentary</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-black uppercase tracking-tighter text-primary pt-2 border-t border-border/10">
                                        <span>Total</span>
                                        <span>${totalAmount}</span>
                                    </div>
                                </div>

                                <Button variant="accent" size="lg" className="w-full h-16 text-xs font-black tracking-[0.3em] group">
                                    SECURE CHECKOUT
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-[9px] text-center text-muted-foreground font-medium uppercase tracking-widest mt-6 italic">
                                    Artisanal packaging included with every order.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
