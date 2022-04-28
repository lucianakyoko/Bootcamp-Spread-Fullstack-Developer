import styled from "styled-components";
import { layoutColors } from "../../styles/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;
`

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    display: block;
    background-color: violet;
    padding: .4rem .8rem;
    border-radius: 8px;
  }
`

export const ProjectDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 4px 4px 12px black;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 0 2rem;

    a {
      color: ${layoutColors.text};
      font-size: 1.6rem;
      font-weight: 200;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.8rem;
      transition: all .4s ease;

      &:hover {
        color: ${layoutColors.highlight} 
      }
    }
  }
`;

export const LinkIcon = styled.span`
  color: ${layoutColors.highlight};
  font-size: 1.6rem;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;
  p {
    color: ${layoutColors.text};
    font-size: 1.6rem;
    font-weight: 200;
  }
`;

export const LearnedWrapper = styled.div`
  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 1.4rem;
    font-weight: 200;
    color: ${layoutColors.text};
    margin-bottom: .8rem;
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

`