import { Dispatch, SetStateAction } from 'react';

export interface IPropsSelect {
  selectList: string[];
  selectType: string | JSX.Element;
  setSelectType: Dispatch<SetStateAction<string | JSX.Element>>;
}

export interface IsOpenType {
  isOpen: boolean;
  listLength: number;
}
