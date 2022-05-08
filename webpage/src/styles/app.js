import styled from "styled-components";
import { layoutColors } from "./colors";

export const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
  position: relative;


  &::before {
    content: "";
    width: 360px;
    height: 300px;
    background-color: ${layoutColors.layerBlur1};
    border-radius: 50%;
    filter: blur(200px);
    position: absolute;
    top: -100px;
    left: 220px;

    z-index: -1;
  }

  &::after {
    content: "";
    width: 360px;
    height: 300px;
    background-color: ${layoutColors.layerBlur2};
    border-radius: 50%;
    filter: blur(200px);
    position: absolute;
    top: 540px;
    left: -172px;

    z-index: -1;
  }

  main {
    padding: 2.4rem;
    margin-top: 8rem;
    
    @media screen and (min-width: 700px) {
      padding: 4rem;
    }
  }
`;

