
import imageTop from '../../assets/imageTop.jpeg'
import { Conteneur, StyledImage, StyledText } from './style';

const TopContainer = () => {
    
    return (
        <Conteneur>
            <StyledImage
                src={imageTop}
                alt="Portfolio"
            />
            <StyledText>VERDIER Nathan</StyledText>
        </Conteneur>
    );
};

export default TopContainer;