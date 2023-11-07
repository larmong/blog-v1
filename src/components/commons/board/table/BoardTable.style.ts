import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';

export const Wrapper = styled.div``;

export const Table = styled.div`
	margin: 15px 0;
`;
export const DataLength = styled.p`
	text-align: right;
	color: ${Common.color.gray2};
	span {
		font-weight: bold;
		color: ${Common.color.gray1};
	}
`;

export const TableHead = styled.div`
	padding: 20px 0;
	border-top: 1px solid ${Common.color.gray2};
	border-bottom: 1px solid ${Common.color.gray2};
	background: ${Common.color.bg};
	span {
		display: inline-block;
		text-align: center;
	}
`;

export const TableBody = styled.div`
	border-bottom: 1px solid ${Common.color.gray2};
`;

export const TableItem = styled.div`
	width: 100%;
	padding: 16px 0;
	border-bottom: 1px solid ${Common.color.bg};
	&:last-of-type {
		border-bottom: none;
	}
	em {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 14px;
		padding: 100px 0;
		font-weight: bold;
		svg {
			width: 50px;
			height: 50px;
		}
	}
	p {
		display: inline-block;
		text-align: center;
		&:nth-of-type(2) {
			text-align: left;
			span {
				cursor: pointer;
			}
		}
	}
`;
