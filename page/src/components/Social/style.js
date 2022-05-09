import styled from 'styled-components';
import { layoutColors } from '../../styles/colors';

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &::after {
    content: '';
    width: 10rem;
    height: .4rem;
    display: block;
    border-radius: 8px;
    background-color: ${layoutColors.hightlight};
    position: absolute;
    right: 2.4rem;
    bottom: 0;
  }

  @media screen and (min-width: 700px){
    &::after {
      display: none;
    }
  }
`

export const SocialParagraph = styled.p`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 200;
  text-align: center;

  @media screen and (min-width: 700px){
    font-size: 2.4rem;
  }
`

export const SocialListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`

export const SocialLink = styled.a`
  color: ${layoutColors.hightlight};
  font-size: 2.8rem;
  font-family: 'Orbitron';
  transition: all .4s ease;

  &:hover {
    color: ${layoutColors.highlightHover};
    cursor: pointer;
    filter: drop-shadow(0px 1px 2px ${layoutColors.light1} );
  }

  @media screen and (min-width: 700px) {
    font-size: 3.2rem;
  }
`