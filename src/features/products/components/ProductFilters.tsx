"use client";

import React from 'react';
import { categories } from '@/data/mockData';
import { Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface FilterState {
    categories: string[];
    priceRanges: string[];
}

interface ProductFiltersProps {
    activeFilters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    onClearAll: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
    activeFilters,
    onFilterChange,
    onClearAll
}) => {
    const priceRanges = [
        { label: 'Under $300', value: '0-300' },
        { label: '$300 - $600', value: '300-600' },
        { label: '$600 - $1000', value: '600-1000' },
        { label: 'Over $1000', value: '1000-plus' }
    ];

    const toggleCategory = (slug: string) => {
        const newCategories = activeFilters.categories.includes(slug)
            ? activeFilters.categories.filter(c => c !== slug)
            : [...activeFilters.categories, slug];
        onFilterChange({ ...activeFilters, categories: newCategories });
    };

    const togglePriceRange = (value: string) => {
        const newRanges = activeFilters.priceRanges.includes(value)
            ? activeFilters.priceRanges.filter(r => r !== value)
            : [...activeFilters.priceRanges, value];
        onFilterChange({ ...activeFilters, priceRanges: newRanges });
    };

    const hasFilters = activeFilters.categories.length > 0 || activeFilters.priceRanges.length > 0;

    return (
        <div className="w-full space-y-12">
            {/* Header with Clear All */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                    Refine By
                </h4>
                {hasFilters && (
                    <button
                        onClick={onClearAll}
                        className="text-[9px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-1"
                    >
                        Clear All <X className="w-3 h-3" />
                    </button>
                )}
            </div>

            {/* Categories */}
            <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Collections
                </h4>
                <ul className="space-y-4">
                    {categories.map((cat) => (
                        <li key={cat.id}>
                            <button
                                onClick={() => toggleCategory(cat.slug)}
                                className="flex items-center gap-3 group cursor-pointer w-full text-left"
                            >
                                <div className={cn(
                                    "w-4 h-4 border-2 transition-all flex items-center justify-center",
                                    activeFilters.categories.includes(cat.slug)
                                        ? "border-primary bg-primary"
                                        : "border-border group-hover:border-primary"
                                )}>
                                    {activeFilters.categories.includes(cat.slug) && (
                                        <Check className="w-3 h-3 text-white" />
                                    )}
                                </div>
                                <span className={cn(
                                    "text-[10px] font-bold uppercase tracking-widest transition-colors",
                                    activeFilters.categories.includes(cat.slug) ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                )}>
                                    {cat.name}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Price Range
                </h4>
                <div className="space-y-4">
                    {priceRanges.map((range) => (
                        <button
                            key={range.value}
                            onClick={() => togglePriceRange(range.value)}
                            className="flex items-center gap-3 group cursor-pointer w-full text-left"
                        >
                            <div className={cn(
                                "w-4 h-4 border-2 transition-all flex items-center justify-center",
                                activeFilters.priceRanges.includes(range.value)
                                    ? "border-primary bg-primary"
                                    : "border-border group-hover:border-primary"
                            )}>
                                {activeFilters.priceRanges.includes(range.value) && (
                                    <Check className="w-3 h-3 text-white" />
                                )}
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest transition-colors",
                                activeFilters.priceRanges.includes(range.value) ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                            )}>
                                {range.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Ethical Vision Block */}
            <div className="p-6 bg-secondary border border-border">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 italic">
                    Ethical Vision
                </h4>
                <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed tracking-wider">
                    Our avant-garde pieces are produced in limited runs to minimize waste. 100% Traceable.
                </p>
            </div>
        </div>
    );
};
