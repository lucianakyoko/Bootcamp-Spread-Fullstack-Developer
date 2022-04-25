import styled from "styled-components";
import { layoutColors } from "../../styles/colors";

export const Logo = styled.a`
  color: ${layoutColors.logo};
  font-family: 'Orbitron', sans-serif;
  font-size: 2.4rem;
  transition: all .4s ease;

  &:hover {
    color: ${layoutColors.logoHover};
    cursor: pointer;
  }
`