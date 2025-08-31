import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '../types';
import toast from 'react-hot-toast';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
} | null>(null);

// cartReducer removed — no price calculations required when cart is disabled
const cartReducer = (_state: CartState, _action: CartAction): CartState => {
  return { items: [], total: 0, itemCount: 0 };
};

// CartProvider removed — cart functionality disabled per request
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dummyState = { items: [], total: 0, itemCount: 0 };
  const noop = () => undefined as any;

  return (
    <CartContext.Provider value={{
      state: dummyState,
      addToCart: noop,
      removeFromCart: noop,
      updateQuantity: noop,
      clearCart: noop,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};