import React from 'react';
import { notFound } from 'next/navigation';
import { categories, products } from '@/data/mockData';
import CategoryDetailClient from '@/app/categories/[slug]/CategoryDetailClient';
import { Category, Product } from '@/types';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function CategoryCollectionPage({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.slug === slug);

    if (!category) return notFound();

    const filteredProducts = products.filter(p => p.category === category.name);

    return (
        <CategoryDetailClient category={category} filteredProducts={filteredProducts} />
    );
}
