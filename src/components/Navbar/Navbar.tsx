import { TabNav } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";
import { useState } from 'react';

const Navbar = () => {

    const [activeTab, setActiveTab] = useState('accueil');

    const scrollTo = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <StyledTabNavRoot justify="start" wrap="wrap">
            <TabNav.Link onClick={() => { setActiveTab('accueil'); scrollToTop(); }} active={activeTab === 'accueil'}>Accueil</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('apropos'); scrollTo('apropos'); }} active={activeTab === 'apropos'}>A propos de moi</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('cv'); scrollTo('cv'); }} active={activeTab === 'cv'}>CV</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('projets'); scrollTo('projets'); }} active={activeTab === 'projets'}>Mes projets</TabNav.Link>
        </StyledTabNavRoot>
    );
};

export default Navbar;