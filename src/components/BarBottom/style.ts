import { TabNav } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledTabNavRoot = styled(TabNav.Root)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    padding: 10px;
    z-index: 1000;
    background-color: var(--mauve-6);
    border-radius: 4px;
    box-shadow: 0 2px 10px var(--black-a7);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Ajoutez un espace entre les éléments */

    @media (max-width: 600px) {
        padding: 5px; /* Réduisez le padding pour les petits écrans */
        gap: 5px; /* Réduisez l'espace entre les éléments pour les petits écrans */

        a {
            font-size: 0.95rem; /* Réduisez légèrement la taille de la police pour les petits écrans */
        }
    }

    a {
        flex: 1 1 150px; /* Assurez-vous que les éléments prennent une largeur flexible */
        text-align: center;
        box-sizing: border-box;
    }
`;