import { Avatar, Box, Card, Text } from "@radix-ui/themes";
import { CustomContainer, CustomContainerText, StyledCard, StyledAvatar, StyledText } from "./style";

interface CvContainerProps {
    data: {
        imageslogo: string;
        titre: string;
        date: string;
        description: string;
    };
    onClick: () => void;
}

const MesProjectsContainer = ({ onClick, data }: CvContainerProps) => {
    return (
        <Box style={{ flex: '1 1 calc(33% - 20px)', boxSizing: 'border-box' }}>
            <CustomContainer>
                <CustomContainerText>
                    <Box maxWidth="240px">
                        <div onClick={onClick} style={{ cursor: 'pointer' }}>
                            <StyledCard>
                                <StyledAvatar
                                    size="7"
                                    src={data.imageslogo}
                                    radius="small"
                                    fallback="T"
                                />
                                <StyledText as="div" size="2" weight="bold">
                                    {data.titre}
                                </StyledText>
                                <StyledText as="div" size="2" color="gray">
                                    {data.date}
                                </StyledText>
                                <StyledText as="div" size="2" color="gray">
                                    {data.description}
                                </StyledText>
                                <StyledText as="div" size="2" style={{ color: 'blue', marginTop: '8px' }}>
                                    Cliquer ici pour voir plus
                                </StyledText>
                            </StyledCard>
                        </div>
                    </Box>
                </CustomContainerText>
            </CustomContainer>
        </Box>
    );
};

export default MesProjectsContainer;