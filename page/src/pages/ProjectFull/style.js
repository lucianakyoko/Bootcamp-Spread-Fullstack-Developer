import styled from "styled-components";
import { layoutColors } from "../../styles/colors";
import { lightBg1,  lightBg2} from "../../styles/mixins";

export const ProjectFullSection = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${lightBg1(layoutColors.light1, 10, 80)};
  ${lightBg2(layoutColors.light2, 60, -40)};

  @media screen and (min-width: 700px) {
    padding: 2.4rem 16rem;
    margin: auto;
    ${lightBg1(layoutColors.light2, 10, 10)}
    ${lightBg2(layoutColors.light2, 60, 80)}
  }
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  span {
    padding: .4rem 1.6rem;
    background-color: violet;
    color: ${layoutColors.primary};
    font-size: 1.4rem;
    border-radius: 8px;
  }
`

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const ImgAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 30rem;
    height: 20rem;
  }

  @media screen and (min-width: 700px) {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 16rem;

    img {
    width: 50rem;
    height: 30rem;
  }
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    width: 50%;
    padding: .8rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${layoutColors.text};
    font-size: 1.6rem;
    font-weight: 200;
    
    transition: all .4s ease;
    &:hover {
      color: ${layoutColors.hightlight};

    }
  }

  @media screen and (min-width: 700px) {
    a {
      width: 100%;
    }
  }
`

export const LinkIcon = styled.span`
  color: ${layoutColors.hightlight};
  font-size: 1.6rem;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 3.2rem;
  }
`

export const LearnedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 8rem; 
  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  li {
    font-size: 1.6rem;
    font-weight: 200;
    color: ${layoutColors.text};
    line-height: 2.4rem;
    margin-left: 1.6rem;
    position: relative;
  }

  li::before {
    content: "";
    width: 10px;
    height: 10px;
    margin-left: -16px;
    border-radius: 50%;
    background-color: ${layoutColors.tertiary};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 700px){ 
    margin-bottom: 12rem;   
  }
`