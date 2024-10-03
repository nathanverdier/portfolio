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
                    <StyledH2 style={{ marginRight: '20px' }}>About me</StyledH2>
                    <MyAvatar imageUrl={myPicture} altText="Photo de profil" fallbackText="Photo de profil" />
                </div>
                    <CustomContainerText>
                        <StyledText>Hello!<br /></StyledText>
                        <StyledText>
                        I have just obtained my <strong>Bachelor's degree in Computer Science</strong> from the IUT Informatique and am currently starting a <strong>Master's degree in SETSIS</strong> at EUPI (Clermont-Ferrand 63), specializing in embedded technologies, as well as image and sound processing.<br/>
                        </StyledText>
                        <StyledText>
                        Outside of my studies and apprenticeship work, I am passionate about everything related to <strong>embedded systems</strong>, <strong>low-level and high-level programming languages</strong>, <strong>UNIX/Linux systems</strong>, and <strong>cybersecurity</strong>.<br/>
                        </StyledText>
                        <StyledText>
                        I also devote a lot of time to <strong>bodybuilding</strong> and maintaining my personal well-being. I regularly work out at the gym and advocate for a balance between physical and mental well-being.<br/>
                        </StyledText>
                    </CustomContainerText>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MyAvatar imageUrl={logoEtud} altText="Profile photo" fallbackText="Profile photo" />
                        <StyledH2 style={{ marginLeft: '20px' }}>My Educational Background</StyledH2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                        <CustomContainerText2>
                            <StyledText style={{ fontWeight: 'bold' }}>HIGH SCHOOL DIPLOMA (STI2D)</StyledText><br />
                            <StyledText>September 2018 - June 2020</StyledText><br />
                            <StyledText>Jean-Zay High School, Thiers (63)</StyledText><br />
                            <StyledText>Graduated with honors.</StyledText><br />
                        </CustomContainerText2>
                        <CustomContainerText2>
                            <StyledText style={{ fontWeight: 'bold' }}>Computer Science Diploma, 2nd Cycle</StyledText><br />
                            <StyledText>January 2023 - July 2023</StyledText><br />
                            <StyledText>UQAC, Chicoutimi (Canada G7H 2B1)</StyledText><br />
                            <StyledText>Short program for undergraduate students on study abroad.</StyledText><br />
                        </CustomContainerText2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
                        <CustomContainerText2>
                            <StyledText style={{ fontWeight: 'bold' }}>University Bachelor of Technology in Computer Science</StyledText><br />
                            <StyledText>September 2021 - September 2024</StyledText><br />
                            <StyledText>IUT Informatique, Clermont-Ferrand (63)</StyledText><br />
                            <StyledText>University Diploma of Technology in Computer Science.</StyledText><br />
                            <StyledText>Awarded the "Responsible Digital" prize during the "24h to undertake" event.</StyledText><br />
                        </CustomContainerText2>
                        <CustomContainerText2>
                            <StyledText style={{ fontWeight: 'bold' }}>MASTER SETSIS</StyledText><br />
                            <StyledText>September 2024 - Present</StyledText><br />
                            <StyledText>Embedded Systems(Microcontrollers, FPGA programming, C/C++, assembly language)</StyledText><br />
                            <StyledText>Machine Learning and AI for Embedded Systems</StyledText><br />
                            <StyledText>Hardware-Software Integration</StyledText><br />
                            <StyledText>Signal and Image Processing</StyledText><br />

                            


                        </CustomContainerText2>
                    </div>
            </CustomContainer>
        </Box>

      
    );
};

export default APropos;