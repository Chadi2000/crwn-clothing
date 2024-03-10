import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem})=>{
    const { name, imageURL, price, quantity } = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageURL} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'> {price} </span>
            <div className='remove-button'>
                &#10005;
            </div>
        </div>
    )

}

export default CheckoutItem;