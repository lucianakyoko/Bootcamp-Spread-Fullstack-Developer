import { createGlobalStyle } from 'styled-components';
import { layoutColors } from './colors';

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