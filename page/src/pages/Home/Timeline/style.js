import styled from 'styled-components';
import { layoutColors } from '../../../styles/colors';

export const TimelineWrapper = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`

export const TimelineList = styled.ul`
  padding-left: 1.6rem;
  border-left: 4px solid ${layoutColors.highlight};

  display: flex;
  flex-direction: column-reverse;
  gap: 1.8rem;

`

export const TimelineItem = styled.li`
position: relative;
  transition: all .4s ease;
  padding: 2rem 0.8rem;

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
    background-color: ${layoutColors.light1};
  }

  &:hover {
    cursor: pointer;
    background-color: ${layoutColors.shadow};
    filter: drop-shadow(4px 4px 4px black);
  }
`

export const ModuleTitle = styled.h3`
  color: ${layoutColors.tertiary};
  font-size: 2rem;
  font-weight: 700;
`

export const ActivityTitle = styled.h4`
  margin-top: 1.2rem;
  color: ${layoutColors.text};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 24px;
`