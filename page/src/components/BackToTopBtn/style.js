import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';

export const Button = styled.button`
  width: 5.2rem;
  height: 5.2rem;
  background-color: ${layoutColors.hightlight};
  border: none;
  border-radius: 50%;
  box-shadow: 4px 4px 12px black;

  color: ${layoutColors.primary};
  font-size: 2.4rem;
  text-align: center;

  position: fixed;
  bottom: 4rem;
  right: 2.4rem;
  z-index: 3;

  transition: all .4s ease;
  &:hover {
    cursor: pointer;
    background-color: ${layoutColors.highlightHover};
  }

  @media screen and (min-width: 700px) {
    width: 6.4rem;
    height: 6.4rem;

    bottom: 6rem;
    right: 4rem;
  }
`