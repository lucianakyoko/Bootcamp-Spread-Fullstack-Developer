import styled from "styled-components";
import { headerSize } from './ui';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;

  position: relative;
  top: ${headerSize.navHightMin};
  z-index: 1;
  
  @media screen and (min-width: 700px) {
    top: ${headerSize.navHightMax};
  }
`