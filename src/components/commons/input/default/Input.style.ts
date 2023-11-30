import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';

export const Wrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 34px;
    border: 1px solid ${Common.color.bg};
    border-radius: 3px;
    padding: 0 10px;
    color: ${Common.color.default};
  }
  input:focus {
    border: 1px solid ${Common.color.gray1};
  }
`;
