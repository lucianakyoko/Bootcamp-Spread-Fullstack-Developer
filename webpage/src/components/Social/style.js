import styled from "styled-components";
import { layoutColors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 4rem 0;

  position: relative;
  &::after {
    content: "";
    width: 100px;
    height: 4px;
    background-color: ${layoutColors.highlight};

    position: absolute;
    right: 0;
    bottom: 0;
  }
`

export const Text = styled.p`
  color: ${layoutColors.text};
  font-size: 2rem;
  text-align: center;
`

export const SocialIconWrapper = styled.ul`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`

export const SocialLink = styled.a`
  color: ${layoutColors.highlight};
  font-size: 3.2rem;
  font-family: 'Orbitron';
  transition: all .4s ease-in-out;

  &:hover {
    color: ${layoutColors.highlightHover};
    cursor: pointer;
    filter: drop-shadow(4px 4px 4px ${layoutColors.layerBlur1} );
  }
`