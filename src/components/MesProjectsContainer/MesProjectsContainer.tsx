import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText } from "./style";

interface CvContainerProps {
	imagesSource : string;
	titre : string;
	date : string;
	description : string;
}

const MesProjectsContainer = ({imagesSource, titre, description} : CvContainerProps) => {

    return(
        <Box style={{ width: '100%'}}>
        <CustomContainer>
            <CustomContainerText>
                <Box maxWidth="240px">
                    <Card>
                        <Flex gap="3" align="center">
                        <Avatar
                            size="5"
                            src={imagesSource}
                            radius="full"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                            {titre}
                            </Text>
                            <Text as="div" size="2" color="gray">
                            {description}
                            </Text>
                        </Box>
                        </Flex>
                    </Card>
                </Box>
            </CustomContainerText>
        </CustomContainer>
        </Box>

      
    );
};

export default MesProjectsContainer;