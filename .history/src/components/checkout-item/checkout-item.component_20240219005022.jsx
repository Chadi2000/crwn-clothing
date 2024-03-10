import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem})=>{
    const { name, imageURL, price, quantity } = cartItem;
    const {clearItemFromCart} = useContext(CartContext)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageURL} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    )

}

export default CheckoutItem;