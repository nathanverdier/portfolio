import { styled } from "styled-components";
import { Container, Text } from "@radix-ui/themes";

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
    line-height: 1.5; /* Line-height par défaut */

    @media (max-width: 600px) {
        font-size: 1.1rem; /* Augmentez légèrement la taille de la police pour les petits écrans */
        line-height: 1.1; /* Réduisez encore plus l'interligne pour les petits écrans */
    }
`;

export const CustomContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;

    @media (max-width: 600px) {
        margin-bottom: 45px; /* Réduisez légèrement la marge pour les petits écrans */
    }
`;

export const CustomContainerText = styled(Container)`
    width: 100%;
    max-width: 100%;
    background-color: lightgray;
    padding: 20px;
    border-radius: 50px;

    @media (max-width: 600px) {
        padding: 18px; /* Réduisez légèrement le padding pour les petits écrans */
        border-radius: 45px; /* Réduisez légèrement le rayon de bordure pour les petits écrans */
        margin-bottom: 8px;
    }
`;

export const CustomContainerText2 = styled(Container)`
    width: 50%;
    max-width: 50%;
    background-color: lightgray;
    padding: 20px;
    border-radius: 50px;

    @media (max-width: 600px) {
        width: 100%; /* Utilisez 100% de la largeur pour les petits écrans */
        padding: 18px; /* Réduisez légèrement le padding pour les petits écrans */
        border-radius: 45px; /* Réduisez légèrement le rayon de bordure pour les petits écrans */
    }
`;