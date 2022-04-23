import styled from "styled-components";
import { SeparateLine, FlexColCenter } from '../../../styles/mixins';

export const PageWrapper = styled.main`
  padding: 2.4rem;

  ${FlexColCenter};
  gap: 4.8rem;
`;

export const SocialBox = styled.div`
  width: 100%;
  padding: 2.4rem 0;
  position: relative;


  &::before {
    ${SeparateLine};
    top: 0;
    left: 0;
  };

  &::after {
    ${SeparateLine};
    right: 0;
  }
`

