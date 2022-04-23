import styled from "styled-components";
import { layoutColors } from "../../../../styles/colors";

export const Container = styled.div`
  position: relative;
  padding-bottom: 24px;

  &::after {
    content: "";
    width: 100px;
    height: 4px;
    background-color: ${layoutColors.highlight};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 2.4rem auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
`;

export const TitleWrapper = styled.div`
  margin: 2.4rem 0;
`;

export const BootcampLogoImg = styled.img`
  width: 164px;
  height: 164px;
`;

export const DioLogoImg = styled.img`
  width: 81px;
`;