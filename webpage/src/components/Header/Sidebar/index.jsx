import React from 'react';
import { Logo } from '../../../styles/ui';
import {
  Navbar, 
  NavbarTop, 
  CloseMenu, 
  MenuListWrapper,
  MenuItem, 
  Link
} from './style';

const Sidebar = ({ onClick }) => {
  return (
    <Navbar>
      <NavbarTop>
        <Logo   
          href='https://lucianakyoko.com'
          rel="noopener noreferrer" 
          target="_blank"
          title="lucianakyoko.com"
        > LK</Logo>
        <CloseMenu onClick={onClick}/>
      </NavbarTop>
      <MenuListWrapper>
        <MenuItem><Link href="#">home</Link></MenuItem>
        <MenuItem><Link href="#">projetos</Link></MenuItem>
        <MenuItem><Link href="#">sobre</Link></MenuItem>
      </MenuListWrapper>
    </Navbar>
  )
}

export default Sidebar;