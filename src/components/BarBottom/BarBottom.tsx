import { TabNav } from "@radix-ui/themes";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { StyledTabNavRoot } from "./style";
import { GitHubLogoIcon, DownloadIcon, LinkedInLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'

const BarBottom = () => {
    return (
        <StyledTabNavRoot style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
            <TabNav.Link href="#" style={{ pointerEvents: "none", flex: '1 1 200px', textAlign: 'center', boxSizing: 'border-box' }}>
                <BsFillTelephoneInboundFill />: 07 81 14 55 43
            </TabNav.Link>
            <TabNav.Link href="mailto:nathanverdier34@gmail.com" style={{ flex: '1 1 200px', textAlign: 'center', boxSizing: 'border-box' }}>
                <EnvelopeOpenIcon /> : nathanverdier34@gmail.com
            </TabNav.Link>
            <TabNav.Link href="https://www.linkedin.com/in/nathan-verdier-1b6421116/" style={{ flex: '1 1 200px', textAlign: 'center', boxSizing: 'border-box' }}>
                <LinkedInLogoIcon /> : nathan-verdier
            </TabNav.Link>
            <TabNav.Link href="https://github.com/nathanverdier" style={{ flex: '1 1 200px', textAlign: 'center', boxSizing: 'border-box' }}>
                <GitHubLogoIcon /> : My projects
            </TabNav.Link>
            <TabNav.Link href="https://nathanverdier.github.io/portfolio/NATHAN_VERDIER_CV.pdf" style={{ flex: '1 1 200px', textAlign: 'center', boxSizing: 'border-box' }}>
                <DownloadIcon /> : My resume
            </TabNav.Link>
        </StyledTabNavRoot>
    );
};

export default BarBottom;