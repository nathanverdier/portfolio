import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText } from "./style";

interface CvContainerProps {
    data: {
        imagesSource: string;
        titre: string;
        date: string;
        description: string;
      };
	onClick: () => void;
}

const MesProjectsContainer = ({onClick, data} : CvContainerProps) => {

    return(
        <Box style={{ width: '100%'}}>
        <CustomContainer>
            <CustomContainerText>
                <Box maxWidth="240px">
                <div onClick={onClick} style={{ cursor: 'pointer' }}>
                    <Card>
                        <Flex gap="3" align="center">
                        <Avatar
                            size="5"
                            src={data.imagesSource}
                            radius="full"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                            {data.titre}
                            </Text>
                            <Text as="div" size="2" color="gray">
                            {data.date}
                            </Text>
                            <Text as="div" size="2" color="gray">
                            {data.description}
                            </Text>
                        </Box>
                        </Flex>
                        <Text as="div" size="2" style={{ color: 'blue', marginTop: '8px', textAlign: 'center' }}>
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