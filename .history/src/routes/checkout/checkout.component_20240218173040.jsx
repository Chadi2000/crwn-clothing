import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () =>{
    const {cartItems} = useContext(CartContext)
    return (
        <div>
            <h1>I am the Checkout page</h1>
            <div>
                {cartItems}
            </div>
        </div>
    )
}

export default Checkout;