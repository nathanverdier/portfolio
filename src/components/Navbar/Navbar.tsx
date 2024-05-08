import { TabNav } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";
import { useState } from 'react';

const Navbar = () => {

    const [activeTab, setActiveTab] = useState('accueil');

    return(
        <StyledTabNavRoot justify="start" wrap="wrap">
            <TabNav.Link href="#" active={activeTab === 'accueil'} onClick={() => setActiveTab('accueil')}>Accueil</TabNav.Link>
            <TabNav.Link href="#apropos" active={activeTab === 'apropos'} onClick={() => setActiveTab('apropos')}>A propos de moi</TabNav.Link>
            <TabNav.Link href="#cv" active={activeTab === 'cv'} onClick={() => setActiveTab('cv')}>CV</TabNav.Link>
            <TabNav.Link href="#projets" active={activeTab === 'projets'} onClick={() => setActiveTab('projets')}>Mes projets</TabNav.Link>
        </StyledTabNavRoot>
      
    );
};

export default Navbar;