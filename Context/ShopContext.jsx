import React, { createContext, useState } from 'react';
import all_products from '../Assets/all_products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, quantity) => {
        // Check if adding one more of the item would exceed the limit of 5
        const updatedQuantity = Math.min(cartItems[itemId] + quantity, 5);
        setCartItems((prev) => ({ ...prev, [itemId]: updatedQuantity }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            else if(cartItems[item] >= 100){
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += (itemInfo.new_price/100) * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
            else if (cartItems[item] >= 100 || cartItems[item]< 510) {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
