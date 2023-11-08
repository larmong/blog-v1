import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Common } from '../../../commons/style/emotion';
import { hover, transition } from '../../../commons/style/global.style';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const BtnStyle = css`
  ${transition};
  ${hover};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  font-size: 0.9em;
  color: ${Common.color.default};
  border: 1px solid ${Common.color.default};
  border-radius: 3px;
  gap: 5px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Prev = styled.button`
  ${BtnStyle};
`;
export const Next = styled.button`
  ${BtnStyle};
`;

export const Pager = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    background: ${Common.color.bg};
    cursor: pointer;
  }
  li {
    &.active {
      color: ${Common.color.white};
      background: ${Common.color.default};
    }
  }
`;
