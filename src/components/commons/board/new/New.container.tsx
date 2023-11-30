import { Table, TableBody, TableHead, TableItem, Wrapper } from './New.style';
import { ReactElement, useEffect, useState } from 'react';
import { INewColumType } from './New.types';
import Input from '../../input/default/Input.container';
import Select from '../../input/select/Select.container';

export default function NewContainer() {
  const column: INewColumType[] = [
    {
      id: 'category',
      name: '카테고리',
    },
    {
      id: 'writer',
      name: '작성자',
    },
    {
      id: 'title',
      name: '제목',
    },
    {
      id: 'contents',
      name: '내용',
    },
  ];
  const [columnElements, setColumnElements] = useState<ReactElement[]>([]);

  const selectList = ['javascript', 'react', 'etc'];
  const [selectType, setSelectType] = useState<string | JSX.Element>(<span>카테고리를 선택해주세요</span>);

  useEffect(() => {
    const elements = column.map((col: INewColumType, colIndex: number) => {
      const characters = col.name.split('');
      const colSpanElements = characters.map((char, charIndex) => <span key={`${colIndex}-${charIndex}`}>{char}</span>);
      return <div key={colIndex}>{colSpanElements}</div>;
    });

    setColumnElements(elements);
  }, []);

  return (
    <Wrapper>
      <Table>
        {column.map((col: INewColumType, colIndex: number) => (
          <TableItem key={colIndex} id={col.id}>
            <TableHead>{columnElements[colIndex]}</TableHead>
            <TableBody>
              {col.id === 'category' ? (
                <Select selectList={selectList} selectType={selectType} setSelectType={setSelectType} />
              ) : col.id === 'writer' ? (
                <span></span>
              ) : col.id === 'title' ? (
                <Input id="new-post-title" />
              ) : col.id === 'contents' ? (
                <div>내용 라이브러리</div>
              ) : (
                ''
              )}
            </TableBody>
          </TableItem>
        ))}
      </Table>
    </Wrapper>
  );
}
