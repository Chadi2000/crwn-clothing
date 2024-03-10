import { useContext } from 'react';
import {Footer, ProductCartContainer} from './product-card.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';


const ProductCard = ({product}) =>{
    const { name, price , imageURL} = product;
    const  { addItemToCart } = useContext(CartContext)

    const addProductToCart = () =>{
        addItemToCart(product)
    }

    return (
    <ProductCartContainer>
        <img src={imageURL} alt={`${name}`} />
        <Footer>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </ProductCartContainer>
    );
}

export default ProductCard;