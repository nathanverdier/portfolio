import { Box, Table, Tabs} from "@radix-ui/themes";
import { CvContainer } from "../CvContainer";
import { CustomCell, CustomCellTop, CustomContainer, CustomRow, StyledH2 } from "./style";
import imageryLogo from '../../assets/imaageryLogo.jpeg';
import uqacLogo from '../../assets/uqacLogo.png';
import mcdoLogo from '../../assets/McdoLogo.png';
import asaLogo from '../../assets/asaLogo.jpeg';
import htmlCssJS from '../../assets/htmlCssJs.png';
import CLogo from '../../assets/CLogo.png';
import CPlusLogo from '../../assets/CPlusLogo.png';
import sqlLogo from '../../assets/sqlLogo.png';
import psqlLogo from '../../assets/PSQLLogo.png';
import mongoLogo from '../../assets/mongoDBLogo.png';
import cSharpLogo from '../../assets/CSharpLogo.png';
import phpLogo from '../../assets/phpLogo.png';
import reactLogo from '../../assets/ReactLogo.png';
import shelLogo from '../../assets/shellLogo.png';
import bashLogo from '../../assets/bashLogo.png';
import kotlinLogo from '../../assets/kotlinLogo.png';
import javaLogo from '../../assets/Java-logo.png';
import MyAvatar from "../MyAvatar/MyAvatar";
import logoCV from '../../assets/logoCV.png';
import logoExpPro from '../../assets/logoExperiencePro.png';
import logoCompetence from '../../assets/logoCompetences.jpg';
import logoPython from '../../assets/logoPython.png';
import logoSwift from '../../assets/logoSwift.png';
import logoTs from '../../assets/logoTypescript.png';

const CVBars = () => {
    
    return(
      
      <Box id="cv" style={{background: 'var(--gray-a2)', width: '100%', borderRadius: '50px', paddingBottom: '50px', marginBottom: '20px'}}>
        <CustomContainer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <StyledH2 style={{ marginRight: '20px' }}>CV</StyledH2>
            <MyAvatar imageUrl={logoCV} altText="Photo de profil" fallbackText="Photo de profil" />
        </div>
          <Tabs.Root defaultValue="experience">  
          <Tabs.List>
            <Tabs.Trigger value="experience">Mes expériences</Tabs.Trigger>
            <Tabs.Trigger value="competences">Compétences</Tabs.Trigger>
          </Tabs.List>
        
          <Box pt="3">
            <Tabs.Content value="experience">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <MyAvatar imageUrl={logoExpPro} altText="Mes expériences professionnelle" fallbackText="Photo de profil" />
              <StyledH2 style={{ marginLeft: '20px' }}>Mes expériences professionnelle</StyledH2>
            </div>
            <CvContainer 
            imagesSource={imageryLogo}
            titre="Alternance en Web, Machine learning et Deep learning"
            date="SEPTEMBRE 2023 - SEPTEMBRE 2024"
            description="Solide expérience en machine learning et deep learning.
                          Segmentation, classification et clustering.
                          Utilisation PyTorch, Yolov8, KNN, divers algorithmes
                          d’apprentissage automatique"
            />
            <CvContainer 
            imagesSource={uqacLogo}
            titre="Stage développement de jeux vidéo"
            date="AVRIL 2023 - JUIN 2023"
            description="Période de 10 semaines dans le laboratoire informatique
                          de l'UQAC .
                          Utilisation de Unreal Engine, C++, Perforce."
            />
            <CvContainer 
            imagesSource={mcdoLogo}
            titre="Équipier polyvalent"
            date="JUIN 2021 - OCTOBRE 2021 ET JUIN 2022 - AOÛT 2022"
            description="Employé en qualité d’équipier polyvalent en restauration
                        rapide. M'a appris le travail en équipe, la gestion du stress,
                        de rush et à être très réactif."
            />
            <CvContainer 
            imagesSource={asaLogo}
            titre="Job d'été"
            date="juin 2018 - août 2018"
            description="Inventaire magasin, aménagement atelier, soutiens aux opérateurs sur des réparations d’éléments d’aéronefs."
            />
            </Tabs.Content>
        
            <Tabs.Content value="competences">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <MyAvatar imageUrl={logoCompetence} altText="Mes compétences" fallbackText="Photo de profil" />
              <StyledH2 style={{ marginLeft: '20px' }}>Mes compétences</StyledH2>
            </div>
            <Table.Root>
              <Table.Header>
                <CustomRow>
                  <CustomCellTop>Langage web</CustomCellTop>
                  <CustomCellTop>Langage de programmation</CustomCellTop>
                  <CustomCellTop>Langage BD</CustomCellTop>
                </CustomRow>
              </Table.Header>

              <Table.Body>
                <CustomRow>
                  <CustomCell><img src={htmlCssJS} alt="CSS Logo" style={{width: '80px', height: '42px', verticalAlign: 'center'}}/></CustomCell>
                  <CustomCell><img src={CLogo} alt="C Logo" style={{width: '30px', height: '30px'}}/></CustomCell>
                  <CustomCell><img src={sqlLogo} alt="SQL Logo" style={{width: '55px', height: '30px'}}/></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell><img src={phpLogo} alt="cSharp Logo" style={{width: '60px', height: '35px'}}/></CustomCell>
                  <CustomCell><img src={CPlusLogo} alt="C++ Logo" style={{width: '30px', height: '30px'}}/></CustomCell>
                  <CustomCell><img src={psqlLogo} alt="PostgreSQL Logo" style={{width: '105px', height: '50px'}}/></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell><img src={reactLogo} alt="cSharp Logo" style={{width: '85px', height: '45px'}}/></CustomCell>
                  <CustomCell><img src={cSharpLogo} alt="cSharp Logo" style={{width: '30px', height: '30px'}}/></CustomCell>
                  <CustomCell><img src={mongoLogo} alt="MongoDB Logo" style={{width: '120px', height: '30px'}}/></CustomCell>
                </CustomRow>

                <CustomRow>
                <CustomCell><img src={logoTs} alt="Ts logo" style={{width: '10', height: '40px'}}/></CustomCell>
                  <CustomCell><img src={shelLogo} alt="cSharp Logo" style={{width: '30px', height: '30px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell></CustomCell>
                  <CustomCell><img src={bashLogo} alt="cSharp Logo" style={{width: '30px', height: '30px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell></CustomCell>
                  <CustomCell><img src={javaLogo} alt="Java Logo" style={{width: '105px', height: '40px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell></CustomCell>
                  <CustomCell><img src={kotlinLogo} alt="cSharp Logo" style={{width: '120px', height: '30px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell></CustomCell>
                  <CustomCell><img src={logoPython} alt="python Logo" style={{width: '120px', height: '30px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>

                <CustomRow>
                  <CustomCell></CustomCell>
                  <CustomCell><img src={logoSwift} alt="swift Logo" style={{width: '90px', height: '30px'}}/></CustomCell>
                  <CustomCell></CustomCell>
                </CustomRow>
                              </Table.Body>
            </Table.Root>

            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </CustomContainer>
    </Box>
    );
};

export default CVBars;