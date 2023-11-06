import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';
import { css } from '@emotion/react';

export const headerIcon = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;
	svg {
		width: 20px;
		height: 20px;
	}
`;

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

export const Search = styled.div`
	${headerIcon};
	// active
	justify-content: right;
	width: 300px;
	border-radius: 50px;
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
