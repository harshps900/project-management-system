"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductSortProps {
    sortBy: string;
    onSortChange: (value: string) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ sortBy, onSortChange }) => {
    const sortOptions = [
        { label: 'Popularity', value: 'popular' },
        { label: 'Newest Arrivals', value: 'newest' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
    ];

    return (
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
                Sort By:
            </span>
            <div className="relative group">
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="appearance-none bg-transparent border-b-2 border-primary py-1 pl-0 pr-8 text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer"
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
        </div>
    );
};
