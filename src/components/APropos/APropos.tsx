import { Box } from "@radix-ui/themes";
import { StyledH2, StyledText, CustomContainer, CustomContainerText } from "./style";
// import imageProfil from "../../assets/photoProfil.jpg";

const APropos = () => {

    return(
        <Box id="apropos" style={{background: 'var(--gray-a2)', width: '100%', marginBottom: '20px', borderRadius: '50px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {/* <img src={imageProfil} alt="photo profil" style={{marginRight: '20px'}} /> */}
                <CustomContainer>
                        <StyledH2>A propos de moi</StyledH2>
                        <CustomContainerText>
                            <StyledText> Bonjour ! Je suis actuellement entrain de finir ma 3ème année de BUT Informatique en alternance chez Imaaagery, une expérience qui m'a permis de plonger au cœur du monde professionnel tout en approfondissant mes connaissances dans le domaine de l'informatique.</StyledText>
                            <StyledText>En dehors de mes études et de mon travail en alternance, j'adore tous ce qui est systems embarqué, les langages de bas et haut niveau, le système UNIX linux et la cybersécurité. par la musculation, le bien être de sois.</StyledText>
                            <StyledText>Je prend également pas mal de temps pour pratiqué une activié ĥysique régulière en salle de musculation, et je pronne le bien être de sois aussi bien physiquement que mentalement.</StyledText>
                        </CustomContainerText>
                        <StyledH2>Mon parcours scolaire</StyledH2>
                        <CustomContainerText>
                            <StyledText> Bonjour ! Je suis actuellement en 3ème année de BUT Informatique en alternance chez Imaaagery, une expérience qui m'a permis de plonger au cœur du monde professionnel tout en approfondissant mes connaissances dans le domaine de l'informatique.</StyledText>
                            <StyledText>En dehoprs de mes études et de mon travail en alternance, je suis passionné par la musculation, le bien être de sois.</StyledText>
                        </CustomContainerText>
                        
                </CustomContainer>
            </div>
        </Box>

      
    );
};

export default APropos;