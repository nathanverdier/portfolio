import { TabNav } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";

const Navbar = () => {
    
    return(
        <StyledTabNavRoot justify="start" wrap="wrap">
            <TabNav.Link href="#" active>Accueil</TabNav.Link>
            <TabNav.Link href="#apropos">A propos de moi</TabNav.Link>
            <TabNav.Link href="#cv">CV</TabNav.Link>
            <TabNav.Link href="#projects">Mes projets</TabNav.Link>
        </StyledTabNavRoot>
      
    );
};

export default Navbar;