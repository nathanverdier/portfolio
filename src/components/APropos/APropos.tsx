import { Box } from "@radix-ui/themes";
import { StyledH2, StyledText, CustomContainer, CustomContainerText } from "./style";

const APropos = () => {

    return(
        <Box style={{background: 'var(--gray-a2)', width: '100%'}}>
        <CustomContainer>
                <StyledH2>A propos de moi</StyledH2>
                <CustomContainerText>
                    <StyledText> Bonjour ! Je suis actuellement en 3ème année de BUT Informatique en alternance chez Imaaagery, une expérience qui m'a permis de plonger au cœur du monde professionnel tout en approfondissant mes connaissances dans le domaine de l'informatique.</StyledText>
                    <StyledText>En dehors de mes études et de mon travail en alternance, je suis passionné par la musculation, le bien être de sois.</StyledText>
                </CustomContainerText>
        </CustomContainer>
        </Box>

      
    );
};

export default APropos;