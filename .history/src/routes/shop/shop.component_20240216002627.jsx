import { ProductsContext } from '../../contexts/products.context';
import { useContext } from 'react';


const Shop  =() =>{
    const {products} = useContext(ProductsContext);
    return (
        <div>
            {ProductsContext.map((product)=>
                (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    {/* <img src={product.imageURL} /> */}

                </div>
                )
            )}
        </div>
    )
}
export default Shop;