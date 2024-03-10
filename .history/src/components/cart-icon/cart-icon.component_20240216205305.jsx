import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ()=> {
    return (
        <div>
            <ShoppingIcon />
            <span>0</span>
        </div>
    )
}

export default CartIcon;