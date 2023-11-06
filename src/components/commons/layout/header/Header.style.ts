import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";
import { css } from "@emotion/react";
import { IsOpenType } from "./Header.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  width: 100%;
`;
export const TitleGroup = styled.div``;

export const Router = styled.span`
  display: block;
  margin-bottom: 2px;
  text-transform: uppercase;
  color: ${Common.color.gray1};
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.4em;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 50px;
  background: ${Common.color.white};
  padding: 10px 13px;
  min-width: 175px;
`;

export const headerIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  overflow: hidden;
  svg {
    width: 20px;
    height: 20px;
  }
  &.cursor-point {
    cursor: pointer;
  }
`;

export const Search = styled.div`
  ${headerIcon};
  // active
  transition: all 0.3s ease-in-out;
  justify-content: ${(props: IsOpenType) =>
    props.isOpen ? "right" : "center"};
  width: ${(props: IsOpenType) => (props.isOpen ? "300px" : "40px")};
`;
export const Mode = styled.div`
  ${headerIcon};
`;
export const Bell = styled.div`
  ${headerIcon};
`;
export const User = styled.div`
  ${headerIcon};
  background: ${Common.color.bg};
`;
