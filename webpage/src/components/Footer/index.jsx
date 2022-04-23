import React from 'react';

import { BsSuitHeart } from 'react-icons/bs';
import Social from '../Social';
import {Container, TextWrapper} from './style';

const Footer = () => {
  return (
    <Container>
      <TextWrapper>
        <p>designed and developed with <BsSuitHeart /> by </p>
        <a 
          href="https://lucianakyoko.com" 
          target="_blank"
          rel="noopener noreferrer"
          >Luciana Kyoko
         </a>
      </TextWrapper>
      <Social />
    </Container>
  )
}

export default Footer;