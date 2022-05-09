import { useState } from 'react';
import { LogoLk } from '../LogoLk';
import { getMenuList } from '../../datas/pageNavigation';

import {HeaderWrapper, OpenMenu, Navbar, CloseMenu, MenuList} from './style';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = getMenuList();

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper>
      <LogoLk />
      <OpenMenu onClick={handleClick}/>
      <Navbar active={isMenuOpen}>
        <CloseMenu onClick={handleClick} />
        
        <MenuList>
          { menuList.map(menu => (
            <li key={menu.id} onClick={handleClick}>
              <a href={menu.href}>{menu.label}</a>
            </li>
          )) }
        </MenuList>
      </Navbar>
    </HeaderWrapper>
  );
}