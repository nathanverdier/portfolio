import { styled } from "styled-components";
import { Box, Container, Text } from "@radix-ui/themes";

export const StyledH2 = styled.h2`
    text-align: left;
    margin-left: 20px;
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

        