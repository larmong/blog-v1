import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';
import { IsOpenType } from './Select.types';

export const Wrapper = styled.div`
  position: relative;
  text-transform: capitalize;
  cursor: pointer;
`;

export const SelectBox = styled.div`
  width: 200px;
  height: 34px;
  border: 1px solid ${Common.color.bg};
  border-radius: 3px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${Common.color.gray1};
    font-weight: 400;
  }
`;

export const SelectList = styled.div`
  height: ${(props: IsOpenType) => (props.isOpen ? `${Number(props.listLength) * 34}px` : '0px')};
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  background: ${Common.color.white};
  box-shadow: 0 2px 10px ${Common.color.bg};
  overflow: hidden;
  transition: all 0.3s ease-out;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    margin: 0 10px;
    padding: 0 3px;
    border-bottom: 1px solid ${Common.color.bg};
    overflow: hidden;
    &.active {
      color: ${Common.color.point};
      em {
        width: 4px;
        height: 4px;
        background: ${Common.color.point};
      }
    }
  }
`;
