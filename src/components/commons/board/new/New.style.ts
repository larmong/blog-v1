import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';

export const Wrapper = styled.div``;

export const Table = styled.div`
  border-top: 1px solid ${Common.color.gray2};
  border-bottom: 1px solid ${Common.color.gray2};
`;

export const TableItem = styled.div`
  display: flex;
`;

export const TableHead = styled.div`
  width: 15%;
  padding: 20px 0;
  background: ${Common.color.bg};
  border-bottom: 1px solid ${Common.color.white};
  > div {
    margin: 0 auto;
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
`;
export const TableBody = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  min-height: 59px;
  width: calc(100% - 15%);
  border-bottom: 1px solid ${Common.color.bg};
`;
