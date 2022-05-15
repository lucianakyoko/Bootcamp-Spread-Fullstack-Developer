import styled from 'styled-components';
import { layoutColors } from '../../../styles/colors';

export const TimelineWrapper = styled.div`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const BootcampListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  
  &::after {
    content: '';
    width: 4px;
    height: 100%;
    background-color: ${layoutColors.secondary};
    border-radius: 8px;

    position: absolute;
    z-index: -1;
  }
  
  @media screen and (min-width: 700px) {
    width: 70rem;
    margin: auto;

    &::after {
    left: calc(50% + 4px);
  }
  }
`

export const BootcampItemWrapper = styled.li`
  max-width: 40rem;
  padding: 1.8rem;
  margin-left: 2rem;
  
  border-radius: 8px;
  background-color: ${layoutColors.shadow};
  filter: drop-shadow(4px 4px 4px black);
  display: flex;
  justify-content: flex-start;

  position: relative;
  transition: all .4s ease;

  &::after {
    content: '';
    width: 2rem;
    height: 2rem;
    background-color: ${layoutColors.secondary};
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: -2.8rem;
    z-index: 2;
    transform: translateY(-50%);
  }
  
  &:first-child::after {
    background-color: ${layoutColors.light1};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${layoutColors.secondary};
    filter: drop-shadow(4px 4px 4px black);
  } 
  
  @media screen and (min-width: 700px) {
    width: 32.5rem;
    margin: 0;
    
    &:nth-child(odd) {
      margin-left: 2rem;
      align-self: flex-end;
    }

    &:nth-child(even) {
      margin-right: 2rem;
      align-self: flex-start;
      text-align: right;

      &::after {
        content: '';
        width: 2rem;
        height: 2rem;
        background-color: ${layoutColors.secondary};
        border-radius: 50%;
  
        position: absolute;
        top: 50%;
        left: 34.5rem;
        z-index: 2;
        transform: translateY(-50%);
      }
    }
  }
`
export const BootcampItemContent = styled.div`
  width: 100%;
`

export const BootcampModuleTitle = styled.h3`
  color: ${layoutColors.light2};
  font-size: 2rem;
  font-weight: 700;
`

export const BootcampActivityTitle = styled.h4`
  margin-top: 1.2rem;
  color: ${layoutColors.text};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 24px;
`

export const ShowMoreBtn = styled.button`
   margin: auto;
   color: ${layoutColors.hightlight};
   font-size: 1.8rem;
   text-transform: uppercase;
  
   background-color: ${layoutColors.shadow};
   border: none;
   border: 2px solid ${layoutColors.hightlight};
   border-radius: 8px;
   padding: .8rem 1.8rem;

   transition: all .4s ease;
  
   &:hover {
     color: ${layoutColors.highlightHover};
     border: 2px solid ${layoutColors.highlightHover};
     cursor: pointer;
   }
 `