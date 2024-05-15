import { Box } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText, StyledH2 } from "./style";
import { MesProjectsContainer } from "../MesProjectsContainer";
import { useState } from "react";
import { ProjetPopup } from "../ProjetPopup";

const MesProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };
  
    return( 
  
      <Box id="projets" style={{background: 'var(--gray-a2)', width: '100%', borderRadius: '50px'}}>
        <CustomContainer>
          <StyledH2>Mes Projects</StyledH2>

          <CustomContainerText>
        
            <Box pt="3" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
              <MesProjectsContainer
                onClick={handleCardClick} 
                imagesSource="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                titre="Titre du CV"
                date="Date du CV"
                description="Description du CV ezc ezc ze cezc ez c"
              />

              <MesProjectsContainer
                onClick={handleCardClick} 
                imagesSource="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                titre="Titre du CV"
                date="Date du CV"
                description="Description du CV ezc ezc ze cezc ez c"
              />

              <MesProjectsContainer
                onClick={handleCardClick} 
                imagesSource="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                titre="Titre du CV"
                date="Date du CV"
                description="Description du CV ezc ezc ze cezc ez c"
              />
              {isDialogOpen && <ProjetPopup onClose={() => setIsDialogOpen(false)} />}
      
            </Box>
          </CustomContainerText>
        </CustomContainer>
      </Box>
    );
};

export default MesProjects;