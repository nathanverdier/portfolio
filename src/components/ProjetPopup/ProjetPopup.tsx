import { Button, Dialog, Flex, Text } from "@radix-ui/themes";

interface ProjetProps {
    data: {
        imagesSource: string;
        titre: string;
        date: string;
        descriptionLongue: string;
        text: string;
        url: string;
    } | null; 
    onClick: () => void;
}

const ProjetPopup = ({ data, onClick }: ProjetProps) => {
    if (!data) {
        return null;
    }

    const { imagesSource, titre, descriptionLongue, text, url } = data;

    return (
        <Dialog.Root open={true}>
            <Dialog.Content maxWidth="850px" style={{ position: 'relative' }}>
                <Dialog.Close onClick={onClick} style={{ position: 'absolute', top: '20px', right: '20px' }}>        
                    <Button variant="soft" color="red">
                        Close
                    </Button>
                </Dialog.Close> 
                <Dialog.Title>{titre}</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    {descriptionLongue} 
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <img src={imagesSource} alt="Description" />
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            {text} 
                        </Text>
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="center">
                    <a href={url} style={{ textDecoration: 'none' }}>
                        <Button variant="ghost">
                            Learn more
                        </Button>
                    </a>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default ProjetPopup;