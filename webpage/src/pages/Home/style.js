import styled from "styled-components";
import { layoutColors } from "../../styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

export const SocialBox = styled.div`
  padding: 4rem 2.4rem;
  background-color: ${layoutColors.tertiary};
  border-radius: 8px;
`;

export const Hero = styled.div`
  &::after {
    content: "";
    height: 4px;
    width: 308px;
    background-color: ${layoutColors.highlight};
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
`;;;