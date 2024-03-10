import { CategoriesContext } from '../../contexts/categories.context';
import { useContext, Fragment } from 'react';
import CategroyPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview  =() =>{
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            { Object.keys(categoriesMap).map((title)=>{

                const products = categoriesMap[title];
                return (
                    <CategroyPreview
                            key={title}
                            title={title}
                            products={products}
                            />
                )

            }
            )}
        </Fragment>

    )
}
export default CategoriesPreview;