import { styled } from "styled-components";
import { Dialog } from "@radix-ui/themes";

export const StyledDialogContent = styled(Dialog.Content)`
    max-width: 850px;
    position: relative;
    padding: 20px;

    @media (max-width: 600px) {
        max-width: 90%; /* Réduisez la largeur maximale pour les petits écrans */
        padding: 10px; /* Réduisez le padding pour les petits écrans */
    }
`;

export const StyledImage = styled.img`
    max-width: 100%; /* Assurez-vous que l'image ne dépasse pas la largeur du conteneur */
    height: auto; /* Maintenez le ratio d'aspect de l'image */

    @media (max-width: 600px) {
        max-width: 100%; /* Assurez-vous que l'image ne dépasse pas la largeur du conteneur pour les petits écrans */
    }
`;

export const StyledDialogClose = styled(Dialog.Close)`
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 600px) {
        top: 10px; /* Ajustez la position du bouton "Close" pour les petits écrans */
        right: 10px; /* Ajustez la position du bouton "Close" pour les petits écrans */
    }
`;