import styled from 'styled-components';
import {lightBg1, lightBg2}from '../../styles/mixins';

import { layoutColors } from '../../styles/colors';

export const AboutSection = styled.section`
  min-height: 90vh;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 8rem;
 
  ${lightBg1(layoutColors.light1, 10, 80)}
  overflow: hidden;
  
  @media screen and (min-width: 700px) {
    padding: 12rem;
    margin: auto;

    flex-direction: row;
    justify-content: center;

    position: relative;
    z-index: 1;

    ${lightBg1(layoutColors.light1, -10, 80)}
    ${lightBg2(layoutColors.light2, -0, -10)}
  }
`

export const AboutParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 3.2rem;

  @media screen and (min-width: 700px) {
    max-width: 60rem;
    font-size: 2rem;
    line-height: 3.8rem;
  }
`