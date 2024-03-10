import { useContext } from 'react'; 
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

const ProductCard = ({product}) =>{
    const { name, price , imageURL} = product;
    const  { addItemToCart } = useContext(CartContext)
    return (
    <div className='product-card-container'>
        <img src={imageURL} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </div>
        <Button buttonType='inverted' onClick={addItemToCart}>Add to Cart</Button>
    </div>
    );
}

export default ProductCard;