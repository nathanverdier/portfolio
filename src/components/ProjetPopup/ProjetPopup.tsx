import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import testGif from '../../assets/testGif.gif';


const ProjetPopup = ({ onClose, title, description, text }: { onClose: () => void, title: string, description: string, text: string }) => {

    return(
        <Dialog.Root open={true}>

        <Dialog.Content maxWidth="850px" style={{ position: 'relative' }}>
            <Dialog.Close onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px' }}>        
                <Button variant="soft" color="red">
                    Fermer
                </Button>
            </Dialog.Close> 
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description size="2" mb="4">
            {description} 
            </Dialog.Description>

            <Flex direction="column" gap="3">
            <img src={testGif} alt="Description" />
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                {text} 
                </Text>
            </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
            
            </Flex>
        </Dialog.Content>
        </Dialog.Root>


    );
};

export default ProjetPopup;