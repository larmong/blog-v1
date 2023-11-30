import styled from '@emotion/styled';
import { Common } from '../../../commons/style/emotion';

export const Wrapper = styled.div`
  display: flex;
`;
export const Page = styled.div`
  position: relative;
  width: calc(100vw - 250px);
  padding: 0 30px;
  font-size: 1.4em;
  margin-left: 250px;
`;

export const Contents = styled.div`
  min-height: calc(100vh - 183px);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: 0.8em;
  //background: ${Common.color.bg};
`;
