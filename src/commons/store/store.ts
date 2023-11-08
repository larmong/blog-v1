import { atom } from 'recoil';
import { PostListTypes } from '../../components/unit/post/list/PostList.types';

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

export const getPostList = atom<PostListTypes[]>({
  key: 'getPostList',
  default: [],
});
