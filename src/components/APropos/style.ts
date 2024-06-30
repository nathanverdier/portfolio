import { styled } from "styled-components";
import { Container, Text } from "@radix-ui/themes";

export const StyledH2 = styled.h2`
    text-align: center;
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

export const CustomContainerText2 = styled(Container)`
    width: 50%;
    max-width: 50%;
    background-color: lightgray;
    padding: 20px;
    border-radius: 50px;
`;