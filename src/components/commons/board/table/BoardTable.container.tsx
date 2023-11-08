import { useRecoilState } from 'recoil';

import { IPropsBoardTable } from './BoardTable.types';
import { getPostList, pagerCurrentState } from '../../../../commons/store/store';
import { DataLength, Table, TableBody, TableHead, TableItem, Wrapper } from './BoardTable.style';
import { TbDatabaseOff } from 'react-icons/tb';
import Pagination from '../../pagination/Pagination.container';

export default function BoardTable(props: IPropsBoardTable) {
  const [data] = useRecoilState(getPostList);
  const [current] = useRecoilState(pagerCurrentState);

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
            {data.slice((current - 1) * 10, current * 10).map((post: any, postIndex: number) => (
              <TableItem key={postIndex}>
                {props.dataName.map((name, i: number) => (
                  <p key={i} style={{ width: `${props.size[i]}` }}>
                    <span>{post[name]}</span>
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
