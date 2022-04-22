import styled from 'styled-components';
import  { layoutColors } from '../../styles/colors';
import { AiOutlineMenu } from 'react-icons/ai';

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 80px;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${layoutColors.primary};
    filter: blur(80px);
    filter: drop-shadow(0px 1px 8px ${layoutColors.shadow});
  }
`;


export const Logo = styled.a`
  color: ${layoutColors.logo};
  font-family: 'Orbitron', sans-serif;
  font-size: 2.4rem;
  transition: all .4s ease;

  &:hover {
    color: ${layoutColors.logoHover};
    cursor: pointer;
  }
`;

export const BurgerMenu = styled(AiOutlineMenu)`
  color: ${layoutColors.highlight};
  font-size: 3.2rem;
  transition: all .4s ease;

  &:hover {
    color: ${layoutColors.highlightHover};
    cursor: pointer;
  }
`;