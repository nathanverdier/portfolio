import { useState } from "react";
import { Box, Button, Flex } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText, StyledH2 } from "./style";
import { MesProjectsContainer } from "../MesProjectsContainer";
import { ProjetPopup } from "../ProjetPopup";
import { project1Data, project2Data, project3Data } from "../../utils/projectData";
import MyAvatar from "../MyAvatar/MyAvatar";
import logoProjet from '../../assets/logoGithub.png';

const MesProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Modifier pour stocker les données du projet sélectionné
  const [selectedProject, setSelectedProject] = useState(null);

  // Modifier pour accepter l'objet de données du projet
  const handleOpenDialog = (projectData: any) => {
    setSelectedProject(projectData);
    setIsDialogOpen(true);
  };
  
  return (
    <Box id="projets" style={{background: 'var(--gray-a2)', width: '100%', borderRadius: '50px'}}>
      <CustomContainer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <StyledH2 style={{ marginRight: '20px' }}>My projects</StyledH2>
            <MyAvatar imageUrl={logoProjet} altText="Photo de profil" fallbackText="Photo de profil" />
        </div>

        <CustomContainerText>
          <Box pt="3" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <MesProjectsContainer
              onClick={() => handleOpenDialog(project1Data)}
              data={project1Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project2Data)}
              data={project2Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project3Data)}
              data={project3Data}
            />
            {/* Passer l'état du projet sélectionné à la prop `data` */}
            {isDialogOpen && <ProjetPopup onClick={() => setIsDialogOpen(false)} data={selectedProject}/>}
          </Box>
        </CustomContainerText>

        <Flex gap="3" mt="4" justify="center">
            <a href="https://github.com/waarx11?tab=repositories" style={{ textDecoration: 'none' }}>
                <Button variant="ghost">
                  See the rest of my projects
                </Button>
            </a>
        </Flex>
      </CustomContainer>
    </Box>
  );
};

export default MesProjects;