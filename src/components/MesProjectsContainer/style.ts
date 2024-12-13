import { styled } from "styled-components";
import { Box, Container, Text } from "@radix-ui/themes";

export const StyledH2 = styled.h2`
    text-align: center;
    line-height: 1.5; /* Line-height par défaut */

    @media (max-width: 600px) {
        font-size: 2rem; /* Augmentez légèrement la taille de la police pour les petits écrans */
        line-height: 1.1; /* Réduisez encore plus l'interligne pour les petits écrans */
    }
`;

export const StyledText = styled(Text)`
    text-align: left;

    @media (max-width: 600px) {
        font-size: 0.9rem; /* Réduisez la taille de la police pour les petits écrans */
    }
`;

export const CustomContainer = styled(Container)`
    width: 100%;
    max-width: 100%;

    @media (max-width: 600px) {
        padding: 10px; /* Réduisez le padding pour les petits écrans */
    }
`;

export const CustomContainerText = styled(Container)`
    width: 100%;
    max-width: 100%;
    padding: 20px;

    @media (max-width: 600px) {
        padding: 15px; /* Réduisez le padding pour les petits écrans */
    }
`;

export const CustomBox = styled(Box)`
    background: blue;
    border-radius: var(--radius-3);
    width: 100%;
    max-width: 100%;

    @media (max-width: 600px) {
        padding: 10px; /* Ajoutez du padding pour les petits écrans */
    }
`;