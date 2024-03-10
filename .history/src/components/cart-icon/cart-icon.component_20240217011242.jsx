import './cart-icon.styles.scss';
import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useState } from 'react';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = ()=> {
    const { isCartOpen , setisCartOpen } = useContext( CartContext );

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;