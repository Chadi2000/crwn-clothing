import { createContext, useState, useEffect } from "react";

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


const deleteCartItem= (cartItems, productToDelete) =>{
    const existingCartItem = cartItems.find((cartItem)=>
        cartItem.id === productToDelete.id
    )
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=>
            cartItem.id !== productToDelete.id
        );
    }
    return cartItems.map((cartItem)=>
    cartItem.id === productToDelete.id ?
    {...cartItem, quantity: 0}
    : cartItem
)
}



const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem)=>
    cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=>
            cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map((cartItem)=>
    cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity -1}
    : cartItem
)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems:[],
    addItemToCart: () =>{},
    removeCartItem: () =>{},
    deleteCartItem: () =>{},
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

    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const deleteItemFromCart = (cartItemToDelete) =>{
        setCartItems(deleteCartItem(cartItems, cartItemToDelete));
    }




    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, deleteItemFromCart,cartItems, cartCount}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}