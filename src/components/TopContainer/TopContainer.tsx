
import imageTop from '../../assets/imageTop.jpeg'
import { Conteneur, StyledImage, StyledText } from './style';

const TopContainer = () => {
    
    return (
        <Conteneur>
            <StyledImage
                src={imageTop}
                alt="A house in a forest"
            />
            <StyledText>VERDIER Nathan</StyledText>
        </Conteneur>
    );
};

export default TopContainer;