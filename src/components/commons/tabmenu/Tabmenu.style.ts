import styled from '@emotion/styled';
import { Common } from '../../../commons/style/emotion';

export const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	font-size: 1.1em;
	text-transform: uppercase;
	height: 45px;
	background: ${Common.color.bg};
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 150px;
		height: 100%;
		color: ${Common.color.white};
		background: ${Common.color.gray1};
		cursor: pointer;
		border-right: 1px solid ${Common.color.gray2};
		&.active {
			font-weight: bold;
			color: ${Common.color.default};
			background: ${Common.color.white};
			border-right: none;
		}
	}
`;
