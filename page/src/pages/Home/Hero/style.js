import styled from "styled-components";
import { layoutColors } from "../../../styles/colors";


export const HeroWrapper = styled.div`
  width: 100%;
  padding: 2.4rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: 700px) {
    width: 80%;
    margin: auto;
    flex-direction: row;
    gap: 10rem;
  }
`
export const Division = styled.div`
  position: relative;
  padding: 2.4rem 0;
    &::after {
    content: '';
    width: 10rem;
    height: .4rem;
    display: block;
    border-radius: 8px;
    background-color: ${layoutColors.hightlight};
    position: absolute;
    bottom: 0;
  }

  @media screen and (min-width: 700px) {
    padding: 2.4rem;
    &::after {
      content: '';
      width: .4rem;
      height: 30%;
      display: block;
    
      position: absolute;
      top: 50%;
      right: -4rem;
    }
  }
`

export const HeroParagraph = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 150%;
  margin-top: 3.2rem;
  span {
    font-weight: 700;
  }
  
  @media screen and (min-width: 700px) {
    font-size: 2rem;
    line-height: 32px;
  }
  
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;

export const BootcampLogoImg = styled.img`
  width: 14rem;
  height: 14rem;
`;

export const DioLogoImg = styled.img`
  width: 8rem;
  height: 3rem;
`
