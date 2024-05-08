import { TabNav } from "@radix-ui/themes";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { StyledTabNavRoot } from "./style";
import { GitHubLogoIcon, DownloadIcon, LinkedInLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'

const BarBottom = () => {
    
    return(
        <StyledTabNavRoot justify="center">
            <TabNav.Link href="#" style={{ pointerEvents: "none" }}> <BsFillTelephoneInboundFill/>: 07 81 14 55 43</TabNav.Link>
            <TabNav.Link href="mailto:nathanverdier34@gmail.com"> <EnvelopeOpenIcon/> : nathanverdier34@gmail.com </TabNav.Link>
            <TabNav.Link href="https://www.linkedin.com/in/nathan-verdier-1b6421116/"> <LinkedInLogoIcon/> : nathan-verdier </TabNav.Link>
            <TabNav.Link href="https://github.com/waarx11"> <GitHubLogoIcon/> : Mes projets</TabNav.Link>
            <TabNav.Link href="/NATHAN_VERDIER_CV.pdf"> <DownloadIcon/> : Mon CV</TabNav.Link>
        </StyledTabNavRoot>
      
    );
};

export default BarBottom;