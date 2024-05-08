import { TabNav } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";

const Navbar = () => {
    
    return(
        <StyledTabNavRoot justify="start" wrap="wrap">
            <TabNav.Link href="#" active>Accueil</TabNav.Link>
            <TabNav.Link href="#">A propos de moi</TabNav.Link>
            <TabNav.Link href="#">CV</TabNav.Link>
            <TabNav.Link href="#">Mes projets</TabNav.Link>
        </StyledTabNavRoot>
      
    );
};

export default Navbar;