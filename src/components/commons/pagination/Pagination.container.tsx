import { useRecoilState } from 'recoil';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Next, Pager, Prev, Wrapper } from './Pagination.style';
import { getPostList, pagerCurrentState } from '../../../commons/store/store';

export default function Pagination() {
  const postCount = 10;
  const [post] = useRecoilState(getPostList);
  const [current, setCurrent] = useRecoilState(pagerCurrentState);
  const total = Math.ceil(post.length / postCount);

  // current pager 가운데로 이동
  let startPage = current - 2;
  let endPage = current + 2;
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(total, 5);
  } else if (endPage > total) {
    endPage = total;
    startPage = Math.max(1, total - 4);
  }

  const handleMoveToPager = (page: number | string) => () => {
    if (page === 'prev') {
      if (current === 1) return;
      setCurrent((prev: number) => prev - 1);
    } else if (page === 'next') {
      if (current === total) return;
      setCurrent((prev: number) => prev + 1);
    } else {
      setCurrent(Number(page));
    }
  };

  return (
    <Wrapper>
      <Prev onClick={handleMoveToPager('prev')} disabled={current === 1}>
        <BsArrowLeft />
        <span>PREV</span>
      </Prev>
      <Pager>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
          <li key={page} className={current === page ? 'active' : ''} onClick={handleMoveToPager(page)}>
            {page}
          </li>
        ))}
      </Pager>
      <Next onClick={handleMoveToPager('next')} disabled={current === total}>
        <span>NEXT</span>
        <BsArrowRight />
      </Next>
    </Wrapper>
  );
}
