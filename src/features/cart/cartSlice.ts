import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size?: string;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    isOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeItem: (state, action: PayloadAction<{ id: string; size?: string }>) => {
            state.items = state.items.filter((item) => !(item.id === action.payload.id && item.size === action.payload.size));
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; size?: string; delta: number }>) => {
            const item = state.items.find((i) => i.id === action.payload.id && i.size === action.payload.size);
            if (item) {
                item.quantity = Math.max(1, item.quantity + action.payload.delta);
                state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
            }
        },
        setCartOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const { addItem, removeItem, updateQuantity, setCartOpen } = cartSlice.actions;
export default cartSlice.reducer;
