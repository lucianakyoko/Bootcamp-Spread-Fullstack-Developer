import styled from "styled-components";
import { layoutColors } from "./colors";

export const Title = styled.h1`
  color: ${layoutColors.highlight};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  `;

export const Subtitle = styled.h2`
  color: ${layoutColors.highlight};
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 700px) {
    font-size: 3.2rem;
  }
`;

export const SubtitleSmall = styled.h3`
  color: ${layoutColors.highlight};
  font-size: 1.8rem;
  font-weight: 600;
`;

export const ParagraphMedium = styled.p`
  color: ${layoutColors.text};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
`;

