import styled from "styled-components";
import { layoutColors } from "./colors";

export const Title = styled.h1`
  color: ${layoutColors.highlight};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const ParagraphMedium = styled.p`
  color: ${layoutColors.text};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
`;

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
