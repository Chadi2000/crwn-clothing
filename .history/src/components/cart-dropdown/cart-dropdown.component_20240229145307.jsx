import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { cartDropdownContainer, cartItem, emptyMessage } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () =>{

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
        navigate('/checkout');
    }

    return (
        <cartDropdownContainer>
            <cartItem>
                {
                    cartItems.length ? (cartItems.map((item) =>(
                        <CartItem key={item.id} CartItem={item }/>
                        ))) :(
                            <emptyMessage>Your cart is empty</emptyMessage>
                        )
                }
                
            </cartItem>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </cartDropdownContainer>
    )

}

export default CartDropdown;