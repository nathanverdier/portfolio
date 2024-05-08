import { TabNav } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledTabNavRoot = styled(TabNav.Root)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    padding: 10px;
    z-index: 1000;
    background-color: var(--mauve-6);
    border-radius: 4px;
    box-shadow: 0 2px 10px var(--black-a7);
`