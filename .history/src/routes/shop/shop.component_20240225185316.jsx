import { CategoriesContext } from '../../contexts/categories.context';
import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop  =() =>{
    const {cetegoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            <div className='products-container'>
                {/* {products.map((product)=>
                    (
                    <ProductCard key={product.id} product={product} />
                    )
                )} */}
            </div>
        </Fragment>

    )
}
export default Shop;