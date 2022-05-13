import styled from 'styled-components';
import { layoutColors } from '../../../styles/colors';

export const FilterContainer = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  p {
    font-size: 1.6rem;
  }
`
export const FilterTypeWrapper =  styled.div`
  box-shadow: 4px 4px 12px black;
  padding: .8rem;
  border-radius: 8px;

  p{
    font-size: 1.4rem;
    font-weight: 200;
  }
`

export const FilterWrapper = styled.ul`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const FilterItem = styled.li`

  button {
    padding: 0.8rem 1.2rem;
    color: ${layoutColors.primary};
    font-size: 1.4rem;
    width: 100%;
    
    border-radius: 8px;
    border: 2px solid transparent;
    background-color: ${props => props.color};
    transition: all .4s ease;
      
    &:hover {
      cursor: pointer;
      color: ${layoutColors.light1};
      background-color: ${layoutColors.secondary};
      border: 2px solid ${layoutColors.hightlight};
    }
  }
`

