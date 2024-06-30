import { Box } from "@radix-ui/themes";
import { StyledH2, StyledText, CustomContainer, CustomContainerText, CustomContainerText2 } from "./style";
import MyAvatar from "../MyAvatar/MyAvatar";
import myPicture from '../../assets/photoProfil.jpg';
import logoEtud from '../../assets/logoScolaire.jpg';

const APropos = () => {

    return(
        <Box id="apropos" style={{background: 'var(--gray-a2)', width: '100%', marginBottom: '20px', borderRadius: '50px'}}>
            <CustomContainer>  
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <StyledH2 style={{ marginRight: '20px' }}>À propos de moi</StyledH2>
                    <MyAvatar imageUrl={myPicture} altText="Photo de profil" fallbackText="Photo de profil" />
                </div>
                     <CustomContainerText>
                        <StyledText> Bonjour ! </StyledText>
                        <StyledText>Je suis actuellement en train de terminer ma 3ème année de BUT Informatique en alternance chez Imaaagery. Cette expérience m'a permis de plonger au cœur du monde professionnel tout en approfondissant mes connaissances dans le domaine de l'informatique.</StyledText>
                        <StyledText> En dehors de mes études et de mon travail en alternance, je suis passionné par tout ce qui touche aux systèmes embarqués, aux langages de programmation de bas et haut niveau, au système UNIX/Linux et à la cybersécurité.</StyledText>
                        <StyledText> Je consacre également beaucoup de temps à la musculation et à maintenir un bien-être personnel. Je pratique régulièrement une activité physique en salle de musculation et je prône le bien-être, tant physique que mental. </StyledText>

                        </CustomContainerText>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <MyAvatar imageUrl={logoEtud} altText="Photo de profil" fallbackText="Photo de profil" />
                            <StyledH2 style={{ marginLeft: '20px' }}>Mon parcours scolaire</StyledH2>
                        </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                    <CustomContainerText2>
                        <StyledText style={{ fontWeight: 'bold' }}>BACCALAUREAT STI2D</StyledText><br/>
                        <StyledText>septembre 2018 - juin 2020</StyledText><br />
                        <StyledText>Lycée Jean-Zay, Thiers (63)</StyledText><br />
                        <StyledText>Mention assez bien.</StyledText><br />
                    </CustomContainerText2>
                    <CustomContainerText2>
                        <StyledText style={{ fontWeight: 'bold' }}>Diplôme Informatique, 2 cycle</StyledText><br />
                        <StyledText>janvier 2023 - juillet 2023</StyledText><br />
                        <StyledText>UQAC, Chicoutimi (Canada G7H 2B1)</StyledText><br />
                        <StyledText>Programme court de 1er cycle en informatique pour étudiant en séjour d'études.</StyledText><br />
                    </CustomContainerText2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <CustomContainerText2>
                        <StyledText style={{ fontWeight: 'bold' }}>Bachelor Universitaire de Technologie Informatique </StyledText><br />
                        <StyledText>septembre 2021 - Septembre 2024</StyledText><br />
                        <StyledText>IUT Informatique, Clermont-Ferrand (63)</StyledText><br />
                        <StyledText>Diplôme Universitaire de Technologie Informatique.
                            Lauréat du prix “Numérique responsable” lors de l’évènement “24h pour entreprendre”.</StyledText><br />
                    </CustomContainerText2>
                    </div>
            </CustomContainer>
        </Box>

      
    );
};

export default APropos;