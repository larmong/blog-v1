import { atom } from 'recoil';
import { PostTypes } from '../../components/unit/post/Post.types';

export const routeState = atom<string>({
  key: 'routeState',
  default: '/',
});

export const searchBarState = atom<boolean>({
  key: 'searchBarState',
  default: false,
});

export const searchValueState = atom<string>({
  key: 'searchValueState',
  default: '',
});

export const pagerCurrentState = atom<number>({
  key: 'pagerCurrentState',
  default: 1,
});

export const getPostList = atom<PostTypes[]>({
  key: 'getPostList',
  default: [
    {
      id: '1',
      title: '첫번째 글 제목입니다.',
      date: '2023.11.06',
      content: '첫번째 글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '2',
      title: '두번째 글 제목입니다.',
      date: '2023.11.07',
      content: '두번째 글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '3',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '4',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '5',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '6',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '7',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '8',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '9',
      title: '글 제목입니다.',
      date: '2023.11.07',
      content: '글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '10',
      title: '열번째 글 제목입니다.',
      date: '2023.11.07',
      content: '열번째 글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '11',
      title: '11 글 제목입니다.',
      date: '2023.11.07',
      content: '열번째 글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '12',
      title: '12 글 제목입니다.',
      date: '2023.11.07',
      content: '열번째 글 내용입니다~!',
      writer: '루루',
    },
    {
      id: '13',
      title: '13 글 제목입니다.',
      date: '2023.11.07',
      content: '열번째 글 내용입니다~!',
      writer: '루루',
    },
  ],
});
