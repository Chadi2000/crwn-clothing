
import { Body, BackgroundImage, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({category})=>{
    const { imageURL, title } = category;
    return(
        <DirectoryItemContainer>
          <BackgroundImage
            imageUrl={imageURL}
             />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    );
}


export default DirectoryItem ;