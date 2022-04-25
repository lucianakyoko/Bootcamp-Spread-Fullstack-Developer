import styled from "styled-components";
import { layoutColors } from "../../../styles/colors";
import { Menu } from "../../../styles/mixins";
import {MdOutlineClose} from 'react-icons/md';

export const Navbar = styled.nav`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0%;
  left: 0;
  z-index: 1;
  background-color: ${layoutColors.primary};

  animation: openSidebar .4s;
  @keyframes openSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
}
`;

export const NavbarTop = styled.div`
  height: 80px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const CloseMenu = styled(MdOutlineClose)`
  ${Menu};
`;

export const MenuListWrapper = styled.ul`
  padding: 4rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

export const MenuItem = styled.li`
  width: 100%;
  padding: 2.4rem;
`

export const Link = styled.a`
  font-family: 'Roboto Mono';
  font-size: 2rem;
  color: ${layoutColors.text};
  position: relative;

  transition: all .4s ease;

  &:hover::after {
    content: "";
    width: 40px;
    height: 4px;
    border-radius: 8px;
    background-color: ${layoutColors.highlight};
    position: absolute;
    bottom: -8px;
    left: 0px;
  }
`