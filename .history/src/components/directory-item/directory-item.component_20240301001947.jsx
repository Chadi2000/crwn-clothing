
import { Body, BackgroundImage, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({category})=>{
    const { imageURL, title } = category;
    return(
        <div className="directory-item-container" >
          <div className='background-image'
            imageUrl={imageURL}
             />
          <div className="body" ey={category.id}>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    );
}


export default DirectoryItem ;