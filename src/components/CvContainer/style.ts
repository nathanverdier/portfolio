import { styled } from "styled-components";
import { Avatar, Card, Flex, Text } from "@radix-ui/themes";

interface StyledTextProps {
    bold?: boolean;
}

export const StyledFlex = styled(Flex)`
    height: 140px;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        height: auto; /* Ajustez la hauteur pour les petits écrans */
        padding: 10px; /* Ajoutez du padding pour les petits écrans */
    }
`;

export const StyledCard = styled(Card)`
    width: 800px;

    @media (max-width: 600px) {
        width: 100%; /* Utilisez 100% de la largeur pour les petits écrans */
        padding: 10px; /* Ajoutez du padding pour les petits écrans */
    }
`;

export const StyledText = styled(Text)<StyledTextProps>`
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}; /* Déterminez le poids de la police en fonction de la prop */

    @media (max-width: 600px) {
        font-size: 0.9rem; /* Réduisez légèrement la taille de la police pour les petits écrans */
    }
`;

export const StyledAvatar = styled(Avatar)`
    @media (max-width: 600px) {
        width: 40px; /* Réduisez la largeur de l'avatar pour les petits écrans */
        height: 40px; /* Réduisez la hauteur de l'avatar pour les petits écrans */
    }
`;