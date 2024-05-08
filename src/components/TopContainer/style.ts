import styled from "styled-components";
import { Text } from '@radix-ui/themes';

export const Conteneur = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StyledImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-2);
    box-shadow: 0 2px 10px var(--black-a7);
    position: relative;
    z-index: 1;
`;

export const StyledText = styled(Text)`
    position: absolute;
    size: 1;
    z-index: 2;
    color: white;
    font-weight: bold;
    font-size: 2rem;
`;