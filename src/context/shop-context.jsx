import React, { createContext ,useState } from "react";
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let i=1;i< PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
};
export const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart=(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId] + 1}));
    }
    const removeFromCart=(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId] - 1}));
    }
    const updateCartItemCount=(itemId,newAmount) =>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}));
    }
    const getTotalCartAmount=()=>{
        let sum=0;
        for(let i=1;i< PRODUCTS.length+1;i++){
            let itemInfo= PRODUCTS.find((product) => product.id === i)
            sum+=itemInfo.price*cartItems[i];
        }
        return sum;
    }

    const contextValue= {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

    
    return <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>;
}

