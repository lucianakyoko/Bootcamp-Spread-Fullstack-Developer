import styled from 'styled-components';
import { layoutColors } from "./colors";

export const headerSize = {
  navHightMin: '8rem',
  navHightMax: '12rem',
};

export const H1 = styled.h1`
  color: ${layoutColors.hightlight};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    font-size: 3.2rem;
  }
`

