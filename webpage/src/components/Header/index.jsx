import React from 'react';
import { Wrapper, Logo, BurgerMenu } from './style';

const Header = () => {
  return (
    <Wrapper>
      <Logo 
        href='https://lucianakyoko.com'
        rel="noopener noreferrer" 
        target="_blank"
        title="lucianakyoko.com"
      >LK</Logo>
      <BurgerMenu title='abrir menu'>menu</BurgerMenu>
    </Wrapper>
  )
}

export default Header;
