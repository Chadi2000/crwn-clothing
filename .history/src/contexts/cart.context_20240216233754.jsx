import { createContext, useState } from "react";



export const CartContext = createContext({
    isCartOpen: false,
    setisCartOpen: () =>{}
})

export const CartProvider = ({children}) =>{
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}