import { AlertDialog, Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";
import { useState } from 'react';
import testGif from '../../assets/testGif.gif';

const ProjetPopup = ({ onClose }: { onClose: any }) => {

    return(
        <Dialog.Root open={true}>

        <Dialog.Content maxWidth="850px" style={{ position: 'relative' }}>
            <Dialog.Close onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px' }}>        
                <Button variant="soft" color="red">
                    Fermer
                </Button>
            </Dialog.Close> 
            <Dialog.Title>Name Project</Dialog.Title>
            <Dialog.Description size="2" mb="4">
            Jeux de société
            </Dialog.Description>

            <Flex direction="column" gap="3">
            <img src={testGif} alt="Description" />
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus, cui nos obsecuturos iunxerat imperiale praeceptum, dispicere litis exitialis certamina cogebatur abnuens et reclamans, adulatorum oblatrantibus turmis, bellicosus sane milesque semper et militum ductor sed forensibus iurgiis longe discretus, qui metu sui discriminis anxius cum accusatores quaesitoresque subditivos sibi consociatos ex isdem foveis cerneret emergentes, quae clam palamve agitabantur, occultis Constantium litteris edocebat inplorans subsidia, quorum metu tumor notissimus Caesaris exhalaret.

                Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ambigua distinguantur ostendit; iudicia rerum in sensibus ponit, quibus si semel aliquid falsi pro vero probatum sit, sublatum esse omne iudicium veri et falsi putat.

                Coactique aliquotiens nostri pedites ad eos persequendos scandere clivos sublimes etiam si lapsantibus plantis fruticeta prensando vel dumos ad vertices venerint summos, inter arta tamen et invia nullas acies explicare permissi nec firmare nisu valido gressus: hoste discursatore rupium abscisa volvente, ruinis ponderum inmanium consternuntur, aut ex necessitate ultima fortiter dimicante, superati periculose per prona discedunt.


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