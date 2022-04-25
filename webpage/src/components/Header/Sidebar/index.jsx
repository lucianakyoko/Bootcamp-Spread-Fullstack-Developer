import React from 'react';


import LogoLk from '../../LogoLk';

import {
  Navbar, 
  NavbarTop, 
  CloseMenu, 
  MenuListWrapper,
  MenuItem, 
  Link
} from './style';

const Sidebar = ({ onClick }) => {
  const pages = [
    {
      id: "link01",
      title: 'home',
      link: '/'
    },
    {
      id: "link02",
      title: 'projetos',
      link: '/projetos'
    },
    {
      id: "link03",
      title: 'sobre',
      link: '/sobre'
    },
  ]
  return (
    <Navbar>
      <NavbarTop>
        <LogoLk />
        <CloseMenu onClick={onClick} title="Fechar menu"/>
      </NavbarTop>
      <MenuListWrapper>
        {pages.map(page => (
          <MenuItem>
            <Link key={page.id} onClick={onClick} href={page.link}>
              {page.title}
            </Link>
          </MenuItem>
        ))}
      </MenuListWrapper>
    </Navbar>
  )
}

export default Sidebar;