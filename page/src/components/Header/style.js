import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';
import { MenuBtn } from '../../styles/mixins';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 2.4rem;
  background-color: ${layoutColors.primary};
  filter: drop-shadow(0px 8px 12px ${layoutColors.secondary});

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  @media screen and (min-width: 700px) {
    padding: 4rem 16rem;
  }
`

export const OpenMenu = styled(MdMenu)`
  ${MenuBtn};
`

export const Navbar = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: ${layoutColors.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  transition: all .4s ease;
  display: ${props => props.active ? 'block' : 'none'};

  animation: openSidebar .4s;
  @keyframes openSidebar {
    from {
      opacity: 0;
      height: 4rem;
    }
    to {
      opacity: 1;
      height: 100vh;
    }
  }

  @media screen and (min-width: 700px) {
    width: auto;
    height: auto;
    position: static;

    display: block;
    animation: none;
  }
`

export const CloseMenu = styled(MdOutlineClose)`
  ${MenuBtn};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  position: absolute;
  top: 8rem;
  left: 4rem;

  &::after {
    content: '';
    width: 20rem;
    height: 18rem;
    background-color: ${layoutColors.light1};
    border: 50%;
    filter: blur(350px);

    position: absolute;
    top: 80%;
    left: -90%;
  }

  @media screen and (min-width: 700px) {   
    position: static;
    flex-direction: row;
  }

  li a {
    color: ${layoutColors.text};
    font-family: 'Roboto Mono';
    font-size: 2.4rem;
    position: relative;
    
    &::after {
      content: '';
      width: 0;
      height: 0.4rem;
      background-color: ${layoutColors.hightlight};
      border-radius: 8px;
      
      position: absolute;
      bottom: -0.8rem;
      left: 0;
      transition: all .4s ease;
    }
    
    &:hover::after {
      width: 4rem;
    }
  }
`