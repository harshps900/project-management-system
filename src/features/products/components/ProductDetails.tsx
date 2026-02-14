import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ShoppingCart, Heart, Share2, Info } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useDispatch } from 'react-redux';
import { addItem, setCartOpen } from '@/features/cart/cartSlice';

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    slug: string;
    badges?: string[];
}

interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const handleAddToCart = () => {
        if (!selectedSize) return;
        setIsAdding(true);

        // Simulate slight delay for premium feel
        setTimeout(() => {
            dispatch(addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: '/placeholder-product.jpg', // Should ideally come from product.image if available
                size: selectedSize,
                quantity: quantity
            }));
            setIsAdding(false);
            dispatch(setCartOpen(true));
        }, 600);
    };

    return (
        <div className="flex flex-col h-full">
            {/* Category & Badges */}
            <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                    {product.category}
                </span>
                {product.badges?.map((badge) => (
                    <Badge key={badge} variant="accent" className="bg-accent text-white border-none py-1 px-3">
                        {badge}
                    </Badge>
                ))}
            </div>

            {/* Name & Price */}
            <div className="mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-primary">
                    {product.name}
                </h1>
                <p className="text-xl md:text-2xl font-black text-primary">${product.price}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Select Size</h4>
                    <button className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground border-b border-muted-foreground hover:text-primary hover:border-primary transition-colors">
                        Size Guide
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                                "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 text-[10px] font-black transition-all",
                                selectedSize === size
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-primary border-border hover:border-primary"
                            )}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
                <Button
                    variant="accent"
                    size="lg"
                    className="h-14 sm:h-16 text-[10px] sm:text-xs font-black tracking-[0.2em]"
                    disabled={!selectedSize || isAdding}
                    onClick={handleAddToCart}
                >
                    {isAdding ? "ADDING TO COLLECTION..." : "ADD TO CART"}
                </Button>
                <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 h-12 sm:h-14 border-primary/20 text-primary text-[10px] font-black tracking-widest">
                        <Heart className="w-4 h-4 mr-2" />
                        WISH LIST
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 sm:h-14 sm:w-14 border-primary/20 text-primary">
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Accordion (Simplified) */}
            <div className="space-y-6 border-t border-border pt-12">
                <div>
                    <button className="flex items-center justify-between w-full group">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Material & Composition</span>
                        <Info className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p className="mt-4 text-[10px] font-bold leading-relaxed text-muted-foreground uppercase tracking-wider">
                        100% Technical Silk Organza. Structured weave for avant-garde silhouette. Dry clean only.
                    </p>
                </div>
                <div className="border-t border-border/50 pt-6">
                    <button className="flex items-center justify-between w-full group">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Artisanal Shipping</span>
                        <Info className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </div>
    );
};
