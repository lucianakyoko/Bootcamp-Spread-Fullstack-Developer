import styled from "styled-components";
import { headerSize } from './ui';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;
  top: calc(${headerSize.navHightMin} + 2.4rem);
  
  @media screen and (min-width: 700px) {
    top: calc(${headerSize.navHightMax} + 2.4rem);
  }
`