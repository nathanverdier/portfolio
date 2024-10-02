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
            <StyledH2 style={{ marginRight: '20px' }}>Resume</StyledH2>
            <MyAvatar imageUrl={logoCV} altText="Photo de profil" fallbackText="Photo de profil" />
        </div>
          <Tabs.Root defaultValue="experience">  
          <Tabs.List>
            <Tabs.Trigger value="experience">My experiences</Tabs.Trigger>
            <Tabs.Trigger value="competences">Skills</Tabs.Trigger>
          </Tabs.List>
        
          <Box pt="3">
            <Tabs.Content value="experience">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <MyAvatar imageUrl={logoExpPro} altText="My professional experiences" fallbackText="Photo de profil" />
              <StyledH2 style={{ marginLeft: '20px' }}>My professional experiences</StyledH2>
            </div>
            <CvContainer 
            imagesSource={imageryLogo}
            titre="Apprenticeship in Web, Machine learning, and Deep learning"
            date="SEPTEMBER 2023 - SEPTEMBER 2024"
            description="Solid experience in machine learning and deep learning.
                          Segmentation, classification, and clustering.
                          Use of PyTorch, Yolov8, KNN, and various machine learning
                          algorithms."
            />
            <CvContainer 
            imagesSource={uqacLogo}
            titre="Video Game Development Internship"
            date="APRIL 2023 - JUNE 2023"
            description="10-week period in the computer lab
                          at UQAC.
                          Use of Unreal Engine, C++, Perforce."
            />
            <CvContainer 
            imagesSource={mcdoLogo}
            titre="Crew Member"
            date="JUNE 2021 - OCTOBER 2021 AND JUNE 2022 - AUGUST 2022"
            description="Worked as a crew member in fast food.
                          Taught me teamwork, stress management, handling rushes,
                          and being highly responsive."
            />
            <CvContainer 
            imagesSource={asaLogo}
            titre="Summer Job"
            date="JUNE 2018 - AUGUST 2018"
            description="Store inventory, workshop setup, assisting operators with aircraft component repairs."
            />
            </Tabs.Content>
        
            <Tabs.Content value="competences">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <MyAvatar imageUrl={logoCompetence} altText="My skills" fallbackText="Photo de profil" />
              <StyledH2 style={{ marginLeft: '20px' }}>My skills</StyledH2>
            </div>
            <Table.Root>
              <Table.Header>
                <CustomRow>
                  <CustomCellTop>Web Languages</CustomCellTop>
                  <CustomCellTop>Programming Languages</CustomCellTop>
                  <CustomCellTop>Database Languages</CustomCellTop>
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