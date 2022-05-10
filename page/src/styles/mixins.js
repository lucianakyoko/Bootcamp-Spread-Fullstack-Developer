import { layoutColors } from "./colors";

export const MenuBtn = () => {
  return `
    font-size: 4rem;
    color: ${layoutColors.hightlight};
    transition: all 0.4s ease;

    &:hover {
      color: ${layoutColors.highlightHover};
      cursor: pointer;
    }

    @media screen and (min-width: 700px) {
      display: none;
    }
  `
}

export const lightBg1 = (color, top, left) => {
  return `
  position: relative;
  &::before {
    content: '';
    width: 30rem;
    height: 30rem;
    border: 50%;
    background-color: ${color};
    filter: blur(164px);
    position: absolute;
    top: ${top}rem;
    left: ${left}%;
    z-index:-1;
  }
  `
}

export const lightBg2 = (color, top, left) => {
  return `
  position: relative;
  &::after {
    content: '';
    width: 30rem;
    height: 30rem;
    border: 50%;
    background-color: ${color};
    filter: blur(164px);
    position: absolute;
    top: ${top}rem;
    left: ${left}%;
    z-index:-1;
  }
  `
}
