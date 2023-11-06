import styled from '@emotion/styled';
import { Common } from '../../../../../commons/style/emotion';
import { headerIcon } from '../Header.style';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: ${Common.color.bg};
	input {
		position: absolute;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: 50px;
	}
`;

export const SearchIcon = styled.div`
	${headerIcon};
	position: absolute;
	right: 0;
`;
