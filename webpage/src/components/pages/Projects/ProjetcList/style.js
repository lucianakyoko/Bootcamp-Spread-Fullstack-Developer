import styled from "styled-components";
import { layoutColors } from "../../../../styles/colors";

export const ProjectsWapper = styled.ul`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const ProjectItemWrapper = styled.li`
  width: 318px;
  height: 204px;
  border-radius: 12px;
  position: relative;
  transition: all 0.4s ease;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  
  &:hover {
    box-shadow: 4px 4px 12px black;
    cursor: pointer;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  padding: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: .8rem;
  
  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 12px 12px;
  z-index: 1;
  
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0px 0px 12px 12px;
    filter: blur(2px);
    top: 0;
    left: 0;
    z-index: -1;
  }

  h3 {
    font-size: 1.6rem;
    color: ${layoutColors.text};
  }
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  padding: 0.8rem 0;

  `
export const Tag = styled.span` 
  background-color: ${(props) => props.color};;
  border-radius: 8px;
  color: ${layoutColors.primary};
  padding: 0.4rem 0.8rem;
`