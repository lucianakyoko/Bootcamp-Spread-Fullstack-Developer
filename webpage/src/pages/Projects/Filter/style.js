import styled from "styled-components";
import { layoutColors } from "../../../styles/colors";


export const TagWrapper = styled.ul`
  padding: 1.6rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: .8rem;

  
  @media screen and (min-width: 700px) {
    padding: 0 4rem;
  }
`

export const TagItem = styled.li`
  width: fit-content;
  padding: 0.8rem;
  background-color: ${props => props.color};
  border-radius: .8rem;

  color: ${layoutColors.primary};
  letter-spacing: .12em;

  transition: all 0.4s ease;

  &:hover {
    background-color: ${layoutColors.primary};
    color: ${layoutColors.highlight};
    cursor: pointer;
  };

  &.active {
    background-color: yellowgreen;
  }
`