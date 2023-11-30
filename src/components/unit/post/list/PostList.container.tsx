import { useState } from 'react';
import { useRouter } from 'next/router';

import { NewPostBtn, TableContainer, Wrapper } from './PostList.style';
import TabMenu from '../../../commons/tabmenu/Tabmenu.container';
import BoardTable from '../../../commons/board/table/BoardTable.container';

export default function PostListContainer() {
  const route = useRouter();

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

  const handleMoveToNewPost = () => {
    void route.push(`${route.route}/new`);
  };

  return (
    <Wrapper>
      <TabMenu menu={tabMenu} setMenu={setTabMenu} />
      <NewPostBtn onClick={handleMoveToNewPost}>+</NewPostBtn>
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
