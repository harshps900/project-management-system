"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-none flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase">M</span>
                            </div>
                            <span className="text-xl font-black tracking-tighter text-gradient uppercase">
                                ModernCart
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-xs leading-relaxed uppercase tracking-widest font-medium">
                            The definitive destination for bold fashion. Curating the future of style with uncompromising quality and high-performance design.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-background rounded-none text-muted-foreground hover:text-accent border border-border transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-foreground mb-8">Collections</h4>
                        <ul className="flex flex-col gap-4">
                            {['New Arrivals', 'Best Sellers', 'Bold Essentials', 'Limited Edition'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-accent text-[10px] font-bold uppercase tracking-widest transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-foreground mb-8">Client Service</h4>
                        <ul className="flex flex-col gap-4">
                            {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-accent text-[10px] font-bold uppercase tracking-widest transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-foreground mb-8">Stay Connected</h4>
                        <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold mb-6 italic">
                            Join the inner circle for exclusive access.
                        </p>
                        <div className="flex gap-0 relative">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="bg-background border border-border rounded-none px-4 py-3 text-[10px] font-bold tracking-widest focus:outline-none focus:ring-1 focus:ring-primary w-full placeholder:text-muted-foreground/40 uppercase"
                            />
                            <Button variant="primary" size="icon" className="shrink-0 absolute right-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-[9px] font-black uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} MODERNCART. BOLD BY DESIGN.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <Link key={item} href="#" className="text-muted-foreground hover:text-foreground text-[9px] font-black uppercase tracking-[0.2em] transition-colors">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
