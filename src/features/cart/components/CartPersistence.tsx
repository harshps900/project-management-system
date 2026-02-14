"use client";

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { addItem } from '@/features/cart/cartSlice';

export const CartPersistence = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const isFirstRender = useRef(true);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('moderncart_bag');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (parsedCart.items && Array.isArray(parsedCart.items)) {
                    // We dispatch addItem for each items to rebuild the state correctly
                    // Or we could have a 'hydrate' action in the slice (cleaner)
                    parsedCart.items.forEach((item: any) => {
                        dispatch(addItem(item));
                    });
                }
            } catch (e) {
                console.error("Failed to hydrate cart:", e);
            }
        }
        isFirstRender.current = false;
    }, [dispatch]);

    // Save cart to localStorage on changes
    useEffect(() => {
        if (!isFirstRender.current) {
            localStorage.setItem('moderncart_bag', JSON.stringify({
                items: cart.items,
                totalAmount: cart.totalAmount
            }));
        }
    }, [cart.items, cart.totalAmount]);

    return null;
};
