import SHOP_DATA from '../../shop-data.json';

const Shop  =() =>{
    return (
        <div>
            {SHOP_DATA.map((product)=>
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