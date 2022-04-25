import React, {useState} from 'react';
import Sidebar from './Sidebar';
import { Logo } from '../../styles/ui';
import { Wrapper, BurgerMenu } from './style';

const Header = () => {
  const [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(!menu);
  };

  return (
    <Wrapper>
      <Logo 
        href='https://lucianakyoko.com'
        rel="noopener noreferrer" 
        target="_blank"
        title="lucianakyoko.com"
      >LK</Logo>
      <BurgerMenu onClick={handleClick} title='abrir menu'>menu</BurgerMenu>
      {menu && <Sidebar onClick={handleClick}/>}
    </Wrapper>
  )
}

export default Header;
