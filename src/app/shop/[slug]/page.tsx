import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/mockData';
import { ProductImageGallery } from '@/features/products/components/ProductImageGallery';
import { ProductDetails } from '@/features/products/components/ProductDetails';
import { ProductCard } from '@/features/products/components/ProductCard';
import ProductDetailClient from '@/app/shop/[slug]/ProductDetailClient';
import { Product } from '@/types';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // Find related products (same category, different id)
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    );
}
