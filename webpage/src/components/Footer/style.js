import styled from "styled-components";
import { layoutColors } from "../../styles/colors";

export const Container = styled.footer`
  width: 100%;
  background-color: ${layoutColors.tertiary};
  padding: 2.4rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 1rem;
    color: ${layoutColors.text};
    font-size: 1.4rem;
    font-weight: 300;
  }

  a {
    color: ${layoutColors.highlight};
    font-size: 1.6rem;
    font-weight: 600;
  }
`;