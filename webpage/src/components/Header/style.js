import styled from 'styled-components';
import  { layoutColors } from '../../styles/colors';
import { Menu } from '../../styles/mixins'
import { AiOutlineMenu } from 'react-icons/ai';

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 80px;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(25, 6, 50, 0.5);
    filter: blur(80px);
    filter: drop-shadow(0px 1px 8px ${layoutColors.shadow});
  }
`;

export const BurgerMenu = styled(AiOutlineMenu)`
  ${Menu};
`;