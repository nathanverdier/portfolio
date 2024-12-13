import { styled } from "styled-components";
import { Avatar, Box, Card, Container, Text } from "@radix-ui/themes";

export const CustomContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;

    @media (max-width: 600px) {
        margin-bottom: 40px; /* Réduisez légèrement la marge pour les petits écrans */
    }
`;

export const CustomContainerText = styled(Container)`
    width: 100%;
    max-width: 100%;
    background-color: lightgray;
    padding: 20px;
    border-radius: 50px;

    @media (max-width: 600px) {
        padding: 15px; /* Réduisez légèrement le padding pour les petits écrans */
        border-radius: 45px; /* Réduisez légèrement le rayon de bordure pour les petits écrans */
    }
`;

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 600px) {
        padding: 10px; /* Réduisez le padding pour les petits écrans */
    }
`;

export const StyledAvatar = styled(Avatar)`
    @media (max-width: 600px) {
        width: 40px; /* Réduisez la largeur de l'avatar pour les petits écrans */
        height: 40px; /* Réduisez la hauteur de l'avatar pour les petits écrans */
    }
`;

export const StyledText = styled(Text)`
    @media (max-width: 600px) {
        font-size: 0.9rem; /* Réduisez légèrement la taille de la police pour les petits écrans */
    }
`;