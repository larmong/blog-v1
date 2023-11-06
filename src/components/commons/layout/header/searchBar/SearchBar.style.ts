import styled from "@emotion/styled";
import { Common } from "../../../../../commons/style/emotion";
import { headerIcon } from "../Header.style";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${Common.color.bg};
`;

export const SearchBar = styled.input`
  padding: 10px 14px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: transparent;
`;

export const SearchIcon = styled.div`
  ${headerIcon};
  background: ${Common.color.bg};
  position: absolute;
  right: 0;
`;
