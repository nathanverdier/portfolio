import { Box } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText, StyledH2 } from "./style";
import { MesProjectsContainer } from "../MesProjectsContainer";
import { SetStateAction, useState } from "react";
import { ProjetPopup } from "../ProjetPopup";
import { project1Data, project2Data, project3Data } from "../../utils/projectData";

const MesProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenDialog = (title: SetStateAction<string>) => {
    setSelectedTitle(title);
    setIsDialogOpen(true);
  };
  
    return( 
  
      <Box id="projets" style={{background: 'var(--gray-a2)', width: '100%', borderRadius: '50px'}}>
        <CustomContainer>
          <StyledH2>Mes Projects</StyledH2>

          <CustomContainerText>
        
            <Box pt="3" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
              <MesProjectsContainer
                onClick={() => handleOpenDialog(project1Data.titre)}
                data={project1Data}
              />

              <MesProjectsContainer
                onClick={() => handleOpenDialog(project2Data.titre)}
                data={project2Data}
              />

              <MesProjectsContainer
                onClick={() => handleOpenDialog(project3Data.titre)}
                data={project3Data}
              />
              {isDialogOpen && <ProjetPopup onClose={() => setIsDialogOpen(false)} title={selectedTitle} />}
      
            </Box>
          </CustomContainerText>
        </CustomContainer>
      </Box>
    );
};

export default MesProjects;