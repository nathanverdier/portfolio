import { styled } from "styled-components";
import { Box, Container, Text, Table } from "@radix-ui/themes";

export const StyledH2 = styled.h2`
    text-align: center;
    line-height: 1.5; /* Line-height par défaut */

    @media (max-width: 600px) {
        font-size: 1.8rem; /* Réduisez légèrement la taille de la police pour les petits écrans */
        line-height: 1.3; /* Réduisez légèrement l'interligne pour les petits écrans */
    }

    @media (max-width: 400px) {
        font-size: 1.5rem; /* Réduisez encore plus la taille de la police pour les très petits écrans */
        line-height: 1.2; /* Réduisez encore plus l'interligne pour les très petits écrans */
    }
`;

export const StyledText = styled(Text)`
    text-align: left;

    @media (max-width: 400px) {
        font-size: 0.8rem; /* Réduisez la taille de la police pour les très petits écrans */
    }
`;

export const CustomContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
`;

export const CustomContainerText = styled(Container)`
    width: 100%;
    max-width: 100%;
    background-color: lightgray;
    padding: 20px;

    @media (max-width: 600px) {
        padding: 15px; /* Réduisez le padding pour les très petits écrans */
    }
`;

export const CustomBox = styled(Box)`
    background: 'blue';
    border-radius: 'var(--radius-3)';
    width: 100%;
    max-width: 100%;
`;

export const CustomRow = styled(Table.Row)`
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 600px) {
        flex-direction: row;
        gap: 2px; /* Réduisez l'écart entre les éléments pour les petits écrans */
    }

    @media (max-width: 400px) {
        flex-direction: row;
        gap: 2px; /* Réduisez encore plus l'écart entre les éléments pour les très petits écrans */
    }
`;

export const CustomCell = styled(Table.Cell)`
    flex: 1; /* Permet aux cellules de partager l'espace équitablement */
    text-align: center;
    padding: 0 12px; /* Ajoute un padding horizontal pour un meilleur alignement du texte */
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    overflow: hidden; /* Cache le contenu qui dépasse de la cellule */
    text-overflow: ellipses; /* Ajoute des ellipses si le contenu dépasse */

    @media (max-width: 600px) {
        text-align: center;
        font-size: 0.8rem; /* Réduisez la taille de la police pour les très petits écrans */
        padding: 5px 0; 
    }
`;

export const CustomCellTop = styled(Table.Cell)`
    flex: 1; /* Permet aux cellules de partager l'espace équitablement */
    text-align: center;
    padding: 0 5px; /* Ajoute un padding horizontal pour un meilleur alignement du texte */
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    overflow: hidden; /* Cache le contenu qui dépasse de la cellule */
    text-overflow: ellipses; /* Ajoute des ellipses si le contenu dépasse */
    font-weight: bold;

    @media (max-width: 600px) {
        text-align: center;
        font-size: 0.8rem; /* Réduisez la taille de la police pour les très petits écrans */
        padding: 5px 0;
    }
`;