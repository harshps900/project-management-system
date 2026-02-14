"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 premium-gradient rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">M</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gradient">
                                ModernCart
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Experience the future of online shopping. We provide the most premium and seamless e-commerce experience with curated collections just for you.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-white rounded-full text-gray-400 hover:text-indigo-600 hover:shadow-md transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {['Home', 'Shop', 'Categories', 'Sale', 'About Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                        <ul className="flex flex-col gap-4">
                            {['Contact Support', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                            />
                            <Button size="icon" className="shrink-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} ModernCart. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
