import { createGlobalStyle } from 'styled-components';
import { layoutColors } from './colors';
import { lightBg1, lightBg2 } from './mixins';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color: ${layoutColors.text};
    font-size: 62.5%;

    background-color: ${layoutColors.primary};

    ${lightBg1(layoutColors.light1, -10, 80)}
    ${lightBg2(layoutColors.light2, 54, -18)}
    overflow-x: hidden;
    
    @media screen and (min-width: 700px) {
      ${lightBg1(layoutColors.light1, 10, 80)}
      ${lightBg2(layoutColors.light2, 54, 8)}
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`