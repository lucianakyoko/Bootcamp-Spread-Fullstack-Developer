import styled from 'styled-components';
import  { layoutColors } from '../../styles/colors';
import { Menu } from '../../styles/mixins'
import { AiOutlineMenu } from 'react-icons/ai';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;

  display: flex;
  align-items: center;
  background-color: ${layoutColors.primary};
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  filter: drop-shadow(0px 8px 12px ${layoutColors.shadow});
`;

export const BurgerMenu = styled(AiOutlineMenu)`
  ${Menu};
`;