import { Avatar, Box, Flex } from "@radix-ui/themes";
import { StyledFlex, StyledCard, StyledText } from "./style";

interface CvContainerProps {
    imagesSource: string;
    titre: string;
    date: string;
    description: string;
}

const CvContainer = ({ imagesSource, titre, date, description }: CvContainerProps) => {
    return (
        <StyledFlex>
            <StyledCard>
                <Flex gap="3" align="center">
                    <Avatar
                        size="6"
                        src={imagesSource}
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <StyledText as="div" size="3" bold>
                            {titre}
                        </StyledText>
                        <StyledText as="div" size="2" bold>
                            {date}
                        </StyledText>
                        <StyledText as="div" size="2" color="gray">
                            {description}
                        </StyledText>
                    </Box>
                </Flex>
            </StyledCard>
        </StyledFlex>
    );
};

export default CvContainer;