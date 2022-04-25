import React, {useState} from 'react';
import Sidebar from './Sidebar';
import LogoLk from '../LogoLk';

import { Wrapper, BurgerMenu } from './style';

const Header = () => {
  const [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(!menu);
  };

  return (
    <Wrapper>
      <LogoLk />
      <BurgerMenu onClick={handleClick} title='abrir menu'>menu</BurgerMenu>
      {menu && <Sidebar onClick={handleClick}/>}
    </Wrapper>
  )
}

export default Header;
