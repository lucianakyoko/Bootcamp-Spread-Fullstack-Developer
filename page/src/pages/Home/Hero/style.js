import styled from "styled-components";
import { layoutColors } from "../../../styles/colors";


export const HeroWrapper = styled.div`
  padding: 2.4rem;
  position: relative;

  p {
    font-size: 2rem;
    font-weight: 300;
    line-height: 150%;
    margin-top: 3.2rem;
    span {
      font-weight: 700;
    }
  }

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
    max-width: 60rem;

    &::after {
      display: none;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.6rem;

    }
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1.8rem;
`;

export const BootcampLogoImg = styled.img`
  width: 16.4rem;
  height: 16.4rem;
`;

export const DioLogoImg = styled.img`
  width: 8rem;
  height: 3rem;
`
