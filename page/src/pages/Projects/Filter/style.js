import styled from 'styled-components';
import { layoutColors } from '../../../styles/colors';

export const FilterContainer = styled.div`
  margin: 2.4rem 0;

  p {
    font-size: 1.6rem;
  }
`

export const TagWrapper = styled.ul`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const TagItem = styled.li`
  padding: 0.8rem 1.2rem;
  color: ${layoutColors.primary};
  font-size: 1.6rem;
  background-color: ${props => props.color};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`