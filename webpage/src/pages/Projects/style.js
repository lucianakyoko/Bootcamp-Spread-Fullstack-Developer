import styled from "styled-components";
import { layoutColors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
 

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  h3 {
    color: ${layoutColors.text};
    font-size: 1.4rem;
  }
`

export const Header = styled.header`
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  p {
    color: ${layoutColors.text};
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.12em;
  }
`