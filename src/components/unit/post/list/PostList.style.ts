import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';
import { BtnStyle } from '../../../commons/pagination/Pagination.style';

export const Wrapper = styled.div`
  position: relative;
`;

export const NewPostBtn = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  ${BtnStyle};
  padding: 6px 12px;
`;

export const TableContainer = styled.div`
  background: ${Common.color.white};
  padding: 30px 20px 0 20px;
`;
