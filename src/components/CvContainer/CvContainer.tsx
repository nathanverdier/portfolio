import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

interface CvContainerProps {
	imagesSource : string;
	titre : string;
	date : string;
	description : string;
}

const CvContainer = ({imagesSource, titre, date,  description} : CvContainerProps) => {
    
    return(
        <Flex style={{ height: '140px', alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ width: '800px' }}>
            <Flex gap="3" align="center">
            <Avatar
                size="6"
                src={imagesSource}
                radius="full"
                fallback="T"
            />
            <Box>
                <Text as="div" size="3" weight="bold">
                {titre}
                </Text>
                <Text as="div" size="2" weight="bold">
                {date}
                </Text>
                <Text as="div" size="2" color="gray">
                {description}
                </Text>
            </Box>
            </Flex>
        </Card>
        </Flex>

// "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      
    );
};

export default CvContainer;