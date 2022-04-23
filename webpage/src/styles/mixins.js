import { layoutColors } from "./colors";

export const SeparateLine = () => {
  return `
    content: "";
    width: 100px;
    height: 4px;
    background-color: ${layoutColors.highlight};
    border-radius: 8px;
    position: absolute;
  `
};

export const FlexColCenter = () => {
  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
};

