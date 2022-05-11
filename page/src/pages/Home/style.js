import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';
import { lightBg1, lightBg2 } from '../../styles/mixins';

export const HomeSection = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  ${lightBg1(layoutColors.light1, 10, 80)};
  ${lightBg2(layoutColors.light2, 60, -40)};

  @media screen and (min-width: 700px) {
    padding: 8rem;

    ${lightBg1(layoutColors.light1, 10, 80)}
    ${lightBg2(layoutColors.light2, 60, 10)}
  }
`

