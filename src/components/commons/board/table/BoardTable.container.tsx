import { useRecoilState } from 'recoil';

import { IPropsBoardTable } from './BoardTable.types';
import { getPostList } from '../../../../commons/store/store';
import { DataLength, Table, TableBody, TableHead, TableItem, Wrapper } from './BoardTable.style';
import { TbDatabaseOff } from 'react-icons/tb';
import Pagination from '../../pagination/Pagination.container';

export default function BoardTable(props: IPropsBoardTable) {
	const [data] = useRecoilState(getPostList);

	return (
		<Wrapper>
			<DataLength>
				총 <span>{data.length}</span> 게시글
			</DataLength>
			<Table>
				<TableHead>
					{props.colum.map((colum: string, index: number) => (
						<span key={index} style={{ width: `${props.size[index]}` }}>
							{colum}
						</span>
					))}
				</TableHead>
				{data.length !== 0 ? (
					<TableBody>
						{data.map((post: any, postIndex: number) => (
							<TableItem key={postIndex}>
								{props.colum.map((_, columIndex: number) => (
									<p key={columIndex} style={{ width: `${props.size[columIndex]}` }}>
										<span>{post[Object.keys(post)[columIndex]]}</span>
									</p>
								))}
							</TableItem>
						))}
					</TableBody>
				) : (
					<TableBody>
						<TableItem>
							<em>
								<TbDatabaseOff />
								데이터가 없습니다.
							</em>
						</TableItem>
					</TableBody>
				)}
			</Table>
			<Pagination />
		</Wrapper>
	);
}
