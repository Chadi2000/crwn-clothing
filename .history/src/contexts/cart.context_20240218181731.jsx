import { createContext, useState, useEffect } from "react";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem= (cartItems, productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem)=>
        cartItem.id === productToAdd.id
    )

    if(existingCartItem){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    return [ ...cartItems, {...productToAdd, quantity:1}];
}
const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem)=>
    cartItem.id === productToRemove.id);

    if(existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id === productToRemove.id ?
            {...cartItem, quantity: cartItem>0? cartItem.quantity -1 : 0}
            : cartItem
        )
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems:[],
    addItemToCart: () =>{},
    removeCartItem: () =>{},
    cartCount: 0
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>
        total+ cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) =>{
        setCartItems(removeCartItem(cartItems, productToRemove))
    }




    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart,cartItems, cartCount}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}