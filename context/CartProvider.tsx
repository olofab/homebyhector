import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {CartItem} from "@/types/types";

type CartContextValue = {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateCartItem: (id: number, quantity: number) => any;
};

const CartContext = createContext<CartContextValue>({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    updateCartItem: () => {}
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
    children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);
    const addItem = (item: CartItem) => {
        // check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            // if the item exists, update the quantity of the existing item
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                quantity: updatedCartItems[existingItemIndex].quantity + item.quantity,
            };
            setCartItems(updatedCartItems);
        } else {
            // if the item does not exist, add it to the cart
            setCartItems([...cartItems, item]);
        }
    };

    const updateCartItem = (id: number, quantity: number) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: quantity,
                };
            } else {
                return item;
            }
        });
        setCartItems(updatedCartItems);
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, updateCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;