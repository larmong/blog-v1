import { useState } from 'react';

import TabMenu from '../../../commons/tabmenu/Tabmenu.container';
import BoardTable from '../../../commons/board/table/BoardTable.container';
import { TableContainer, Wrapper } from './PostList.style';

export default function PostListContainer() {
  const [tabMenu, setTabMenu] = useState([
    {
      title: 'javascript',
      active: true,
    },
    {
      title: 'react',
      active: false,
    },
    {
      title: 'vue',
      active: false,
    },
  ]);

  return (
    <Wrapper>
      <TabMenu menu={tabMenu} setMenu={setTabMenu} />
      <TableContainer>
        <BoardTable
          colum={['NO', '제목', '날짜']}
          size={['80px', 'calc(100% - 230px)', '150px']}
          dataName={['count', 'title', 'date']}
        />
      </TableContainer>
    </Wrapper>
  );
}