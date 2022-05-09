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