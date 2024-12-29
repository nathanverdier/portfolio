import { useState } from "react";
import { Box, Button, Flex } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText, StyledH2, ProjectsContainer } from "./style";
import { MesProjectsContainer } from "../MesProjectsContainer";
import { ProjetPopup } from "../ProjetPopup";
import { project1Data, project2Data, project3Data, project4Data, project5Data, project6Data, project7Data, project8Data, project9Data } from "../../utils/projectData";
import MyAvatar from "../MyAvatar/MyAvatar";
import logoProjet from '../../assets/logoGithub.png';

const MesProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDialog = (projectData: any) => {
    setSelectedProject(projectData);
    setIsDialogOpen(true);
  };
  
  return (
    <Box id="projets" style={{ background: 'var(--gray-a2)', width: '100%', borderRadius: '50px' }}>
      <CustomContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StyledH2 style={{ marginRight: '20px' }}>My projects</StyledH2>
          <MyAvatar imageUrl={logoProjet} altText="Photo de profil" fallbackText="Photo de profil" />
        </div>

        <CustomContainerText>
          <ProjectsContainer pt="3">
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
            {isDialogOpen && <ProjetPopup onClick={() => setIsDialogOpen(false)} data={selectedProject} />}
          </ProjectsContainer>
          
          <ProjectsContainer pt="3">
            <MesProjectsContainer
              onClick={() => handleOpenDialog(project4Data)}
              data={project4Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project5Data)}
              data={project5Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project6Data)}
              data={project6Data}
            />
            {isDialogOpen && <ProjetPopup onClick={() => setIsDialogOpen(false)} data={selectedProject} />}
          </ProjectsContainer>
          
          <ProjectsContainer pt="3">
            <MesProjectsContainer
              onClick={() => handleOpenDialog(project7Data)}
              data={project7Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project8Data)}
              data={project8Data}
            />

            <MesProjectsContainer
              onClick={() => handleOpenDialog(project9Data)}
              data={project9Data}
            />
            {isDialogOpen && <ProjetPopup onClick={() => setIsDialogOpen(false)} data={selectedProject} />}
          </ProjectsContainer>
        </CustomContainerText>

        <Flex gap="3" mt="4" justify="center">
          <a href="https://github.com/nathanverdier?tab=repositories" style={{ textDecoration: 'none' }}>
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