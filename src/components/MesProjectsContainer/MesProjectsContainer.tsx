import { Avatar, Box, Card, Text } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText } from "./style";

interface CvContainerProps {
    data: {
        imageslogo: string;
        titre: string;
        date: string;
        description: string;
      };
	onClick: () => void;
}

const MesProjectsContainer = ({onClick, data} : CvContainerProps) => {

    return(
        <Box style={{ flex: '1 1 calc(33% - 20px)', boxSizing: 'border-box' }}>
        <CustomContainer>
            <CustomContainerText>
                <Box maxWidth="240px">
                <div onClick={onClick} style={{ cursor: 'pointer' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Avatar
                        size="7"
                        src={data.imageslogo}
                        radius="small"
                        fallback="T"
                    />
                    <Text as="div" size="2" weight="bold">
                        {data.titre}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        {data.date}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        {data.description}
                    </Text>
                    <Text as="div" size="2" style={{ color: 'blue', marginTop: '8px' }}>
                        Cliquer ici pour voir plus
                    </Text>
                </Card>
                </div>
                </Box>
            </CustomContainerText>
        </CustomContainer>
        </Box>

      
    );
};

export default MesProjectsContainer;