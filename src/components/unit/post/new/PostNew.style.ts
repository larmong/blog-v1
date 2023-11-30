import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';
import { BtnStyle } from '../../../commons/pagination/Pagination.style';

export const Wrapper = styled.div`
  padding: 30px 20px;
  min-height: calc(100vh - 183px);
  background: ${Common.color.white};
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
  button {
    ${BtnStyle};
    padding: 10px 30px;

    &.btn-full {
      background: ${Common.color.gray1};
      color: ${Common.color.white};
      border: 1px solid ${Common.color.gray1};
    }
  }
`;
