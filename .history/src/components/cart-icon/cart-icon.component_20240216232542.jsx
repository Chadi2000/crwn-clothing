import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useState } from 'react';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const CartIcon = ()=> {
    const [isDropDownVisible, setIsDropDownVisible] = useState(null);

    const handleIconClick = () =>{
        setIsDropDownVisible(!isDropDownVisible);
    }

    return (
        <div className='cart-icon-container' >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>

            {isDropDownVisible && <CartDropdown />}
        </div>
    )
}

export default CartIcon;