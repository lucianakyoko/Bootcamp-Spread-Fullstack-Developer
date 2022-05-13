import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';

export const FooterWrapper = styled.footer`
  width: 100%;

  margin-top: 2.4rem;
  padding: 2.4rem;

  display: flex;
  flex-direction:column ;
  align-items: center;
  justify-content: center;

  background-color: ${layoutColors.secondary};
  position: relative;
  z-index: -1;

  @media screen and (min-width: 700px) {
    flex-direction: row-reverse;
  }
`

export const FooterText = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
  position: relative;

  a {
    color: ${layoutColors.hightlight};
    font-weight: 700;
    margin-left: .8rem;
  }

  @media screen and (min-width: 700px) {
    &::before {
      content: '';
      width: 2px;
      height: 100%;
      background-color: ${layoutColors.tertiary};
      position: absolute;
      top: 50%;
      left: -1rem;
      transform: translateY(-50%);
    }
  }
`

export const IconsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  padding: 2.4rem;
`

export const Icon = styled.a`
  display: block;

  font-size: 2.4rem;
  color: ${layoutColors.hightlight};
  transition: all .4s ease;
  
  &:hover {
    cursor: pointer;
    color: ${layoutColors.highlightHover};
    filter: drop-shadow(0px 2px 1px ${layoutColors.light1});
  }
`