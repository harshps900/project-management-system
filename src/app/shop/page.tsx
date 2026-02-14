"use client";

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { products } from '@/data/mockData';
import { ProductCard } from '@/features/products/components/ProductCard';
import { ProductFilters, FilterState } from '@/features/products/components/ProductFilters';
import { ProductSort } from '@/features/products/components/ProductSort';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { staggerContainer } from '@/lib/animationVariants';

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initial state from URL
    const getInitialFilters = (): FilterState => {
        const cats = searchParams.get('categories');
        const prices = searchParams.get('prices');
        return {
            categories: cats ? cats.split(',') : [],
            priceRanges: prices ? prices.split(',') : []
        };
    };

    const [filters, setFilters] = useState<FilterState>(getInitialFilters());
    const [sortBy, setSortBy] = useState('popular');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Sync state with URL manually if needed (searchParams is read-only)
    useEffect(() => {
        const cats = searchParams.get('categories');
        const prices = searchParams.get('prices');
        setFilters({
            categories: cats ? cats.split(',') : [],
            priceRanges: prices ? prices.split(',') : []
        });
    }, [searchParams]);

    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
        const params = new URLSearchParams(searchParams.toString());

        if (newFilters.categories.length > 0) {
            params.set('categories', newFilters.categories.join(','));
        } else {
            params.delete('categories');
        }

        if (newFilters.priceRanges.length > 0) {
            params.set('prices', newFilters.priceRanges.join(','));
        } else {
            params.delete('prices');
        }

        router.push(`/shop?${params.toString()}`, { scroll: false });
    };

    const handleClearAll = () => {
        const newFilters = { categories: [], priceRanges: [] };
        handleFilterChange(newFilters);
    };

    // Advanced Filtering Logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // 1. Multi-Category Filter
        if (filters.categories.length > 0) {
            result = result.filter(p => {
                const slug = p.category.toLowerCase().replace(' ', '-');
                return filters.categories.includes(slug);
            });
        }

        // 2. Price Range Filter
        if (filters.priceRanges.length > 0) {
            result = result.filter(p => {
                return filters.priceRanges.some(range => {
                    if (range === '0-300') return p.price <= 300;
                    if (range === '300-600') return p.price > 300 && p.price <= 600;
                    if (range === '600-1000') return p.price > 600 && p.price <= 1000;
                    if (range === '1000-plus') return p.price > 1000;
                    return false;
                });
            });
        }

        // 3. Sorting
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
                break;
            default:
                break;
        }

        return result;
    }, [filters, sortBy]);

    return (
        <div className="bg-background min-h-screen">
            {/* Shop Header */}
            <section className="bg-secondary pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                        <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                            <span>Home</span>
                            <span>/</span>
                            <span className="text-primary">Shop All</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-primary">
                            {filters.categories.length === 1 ? filters.categories[0].replace('-', ' ') : 'The Collection'}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Desktop Sidebar (Filters) */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-32 self-start">
                        <ProductFilters
                            activeFilters={filters}
                            onFilterChange={handleFilterChange}
                            onClearAll={handleClearAll}
                        />
                    </aside>

                    {/* Product Feed */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="flex items-center justify-between mb-12 pb-6 border-b border-border">
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="lg:hidden"
                                    onClick={() => setIsMobileFilterOpen(true)}
                                >
                                    <Filter className="w-4 h-4 mr-2" />
                                    Filters
                                </Button>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                    Showing {filteredProducts.length} Results
                                </span>
                            </div>

                            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
                        </div>

                        {/* Grid */}
                        <AnimatePresence mode="popLayout" initial={false}>
                            {filteredProducts.length > 0 ? (
                                <motion.div
                                    layout
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
                                >
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="py-32 text-center">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">No pieces match your selection.</h3>
                                    <Button variant="accent" className="mt-8" onClick={handleClearAll}>
                                        CLEAR ALL FILTERS
                                    </Button>
                                </div>
                            )}
                        </AnimatePresence>
                    </main>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] p-8 overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-xl font-black uppercase tracking-tighter">Refine Selection</h3>
                                <button onClick={() => setIsMobileFilterOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <ProductFilters
                                activeFilters={filters}
                                onFilterChange={handleFilterChange}
                                onClearAll={handleClearAll}
                            />
                            <div className="mt-12">
                                <Button className="w-full" onClick={() => setIsMobileFilterOpen(false)}>
                                    VIEW {filteredProducts.length} RESULTS
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <ShopContent />
        </Suspense>
    );
}
