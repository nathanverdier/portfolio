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
`;

export const CustomContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;
`;

export const CustomContainerText = styled(Container)`
    width: 100%;
    max-width: 100%;
    background-color: lightgray;
    padding: 20px;
    border-radius: 50px;
`;

export const CustomBox = styled(Box)`
    background: blue;
    border-radius: var(--radius-3);
    width: 100%;
    max-width: 100%;
`;

export const ProjectsBox = styled(Box)`
    background: var(--gray-a2);
    width: 100%;
    border-radius: 50px;
`;

export const ProjectsContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (max-width: 600px) {
        gap: 0px; /* Réduisez l'écart entre les éléments pour les petits écrans */
    }
`;