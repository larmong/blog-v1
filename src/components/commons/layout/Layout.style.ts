import styled from '@emotion/styled';
import { Common } from '../../../commons/style/emotion';

export const Wrapper = styled.div`
	display: flex;
`;
export const Page = styled.div`
	width: calc(100vw - 250px);
	padding: 0 30px;
	font-size: 1.4em;
`;

export const Contents = styled.div`
	background: ${Common.color.white};
	height: calc(100vh - 170px);
`;
