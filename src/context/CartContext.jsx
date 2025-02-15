import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) => {
                    if (item.id === product.id) {
                        return {...item, quantity: item.quantity + 1}; 
                    }
                    return item;
                });
            }
            
            return [...prevCart, {...product, quantity: 1}]
        });
    };

    const updateCart = (itemId, newQuantity) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === itemId) {
                    return {...item, quantity: newQuantity};
                }
                return item;
            });
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};