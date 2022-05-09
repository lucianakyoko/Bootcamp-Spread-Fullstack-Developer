import styled from 'styled-components';
import { layoutColors } from "./colors";

export const headerSize = {
  navHightMin: '4rem',
  navHightMax: '6rem',
};

export const H1 = styled.h1`
  color: ${layoutColors.hightlight};
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    font-size: 2.4rem;
  }
`
export const H2 = styled.h2`
  color: ${layoutColors.hightlight};
  font-size: 2rem;
  font-weight: 700;
`