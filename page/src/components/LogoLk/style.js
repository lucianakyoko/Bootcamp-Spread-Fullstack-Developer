import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';

export const Logo = styled.a`
  color: ${layoutColors.tertiary};
  font-family: 'Orbitron', sans-serif;
  font-size: 2.4rem;

  transition: all ease 0.4s;

  &:hover {
    color: ${layoutColors.tertiaryHover};
    text-shadow: ${layoutColors.textShadow};
    
    cursor: pointer;
  }
`