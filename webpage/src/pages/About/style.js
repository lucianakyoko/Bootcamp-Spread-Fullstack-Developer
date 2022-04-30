import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Wrapper = styled.div`

  p {
    color: ${layoutColors.text};
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 24px;
    margin: 1.2rem 0;
  }

`
