import styled from 'styled-components';
import { layoutColors } from "../../styles/colors";


export const ProjectSection = styled.section`

  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  @media screen and (min-width: 700px) {
    padding: 2.4rem 16rem;
    margin: auto;
    gap: 3.2rem;
  }
`

export const ProjectHeader = styled.header`
  p {
    font-size: 1.6rem;
    font-weight: 200;
    margin-top: .8rem;
        
    @media screen and (min-width: 700px) {
      font-size: 2rem;
    }
  }
`