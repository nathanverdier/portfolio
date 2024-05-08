import { Box, Table, Tabs} from "@radix-ui/themes";
import { CvContainer } from "../CvContainer";
import { StyledH2 } from "./style";

const CVBars = () => {
    
    return(
      <Tabs.Root defaultValue="experience">  
      <StyledH2>CV</StyledH2>
      <Tabs.List>
        <Tabs.Trigger value="experience">Mes expériences</Tabs.Trigger>
        <Tabs.Trigger value="competences">Compétences</Tabs.Trigger>
      </Tabs.List>
    
      <Box pt="3">
        <Tabs.Content value="experience">
        <CvContainer 
        imagesSource="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        titre="Titre du CV"
        date="Date du CV"
        description="Description du CV ezc ezc ze cezc ez c"
      />
        </Tabs.Content>
    
        <Tabs.Content value="competences">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
              <Table.Cell>zahra@example.com</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
              <Table.Cell>jasper@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

        </Tabs.Content>
      </Box>
    </Tabs.Root>
    
      
    );
};

export default CVBars;