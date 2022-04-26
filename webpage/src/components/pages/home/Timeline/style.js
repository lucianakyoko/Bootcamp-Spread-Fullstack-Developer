import styled from "styled-components";
import { layoutColors } from "../../../../styles/colors";

export const ActiviesWrapper = styled.ul`
  margin-top: 2.4rem;
  padding-left: 1.6rem;
  border-left: 4px solid ${layoutColors.highlight};

  display: flex;
  flex-direction: column-reverse;
  gap: 2.4rem;
`;

export const ActivityWrapper = styled.li`
  position: relative;
  transition: all .4s ease;
  padding: 0.8rem;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${layoutColors.secondary};
    position: absolute;
    left: -18px;
    transform: translateX(-50%);
  }  

  &:last-child::before {
    background-color: ${layoutColors.layerBlur1};
  }

  &:hover {
    cursor: pointer;
    background-color: ${layoutColors.shadow};
    filter: drop-shadow(4px 4px 4px black);
  }
`;

export const ActivityTitle = styled.h2`
  color: ${layoutColors.secondary};
  font-size: 2rem;
  font-weight: 700;
`;

export const ActivitySubtitle = styled.h3`
  color: ${layoutColors.text};
  font-size: 1.6rem;
  font-weight: 500;
`;

