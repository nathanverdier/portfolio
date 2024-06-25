import { styled } from "styled-components";
import { Box, Container, Text, Table } from "@radix-ui/themes";

export const StyledH2 = styled.h2`
    text-align: center;
`;

export const StyledText = styled(Text)`
    text-align: left;
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
`;

export const CustomCell = styled(Table.Cell)`
    flex: 1; /* Permet aux cellules de partager l'espace équitablement */
    text-align: center;
    padding: 0 12px; /* Ajoute un padding horizontal pour un meilleur alignement du texte */
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    overflow: hidden; /* Cache le contenu qui dépasse de la cellule */
    text-overflow: ellipsis; /* Ajoute des ellipses si le contenu dépasse */
`;


export const CustomCellTop = styled(Table.Cell)`
    flex: 1; /* Permet aux cellules de partager l'espace équitablement */
    text-align: center;
    padding: 0 5px; /* Ajoute un padding horizontal pour un meilleur alignement du texte */
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    overflow: hidden; /* Cache le contenu qui dépasse de la cellule */
    text-overflow: ellipsis; /* Ajoute des ellipses si le contenu dépasse */
    font-weight: bold;
`;
