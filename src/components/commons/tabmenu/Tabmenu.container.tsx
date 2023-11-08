import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, where, query } from '@firebase/firestore';

import { db } from '../../../commons/libraries/firebase/firebase.config';
import { getPostList, pagerCurrentState } from '../../../commons/store/store';
import { IPropsTabMenu, TabMenuTypes } from './Tabmenu.types';
import { Wrapper } from './Tabmenu.style';

export default function TabMenu(props: IPropsTabMenu) {
  const [_, setData] = useRecoilState(getPostList);
  const [__, setCurrent] = useRecoilState(pagerCurrentState);
  const [isTabMenu, setIsTabMenu] = useState(props.menu[0].title);

  const handleMoveToTab = (menu: string) => () => {
    setIsTabMenu(menu);
  };

  const getBoardData = async () => {
    setCurrent(1);
    try {
      const data = await query(collection(db, 'boards'), where('type', '==', isTabMenu), orderBy('date', 'desc'));
      const getData = await getDocs(data);
      const result: any = getData.docs.map((doc, index: number) => ({
        ...doc.data(),
        id: doc.id,
        count: index + 1,
      }));
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    props.setMenu(
      props.menu.map((menu: TabMenuTypes) => {
        if (menu.title === isTabMenu) {
          return { ...menu, active: true };
        } else {
          return { ...menu, active: false };
        }
      })
    );
    void getBoardData();
  }, [isTabMenu]);

  return (
    <Wrapper>
      {props.menu.map((menu: TabMenuTypes, index: number) => (
        <li key={index} className={menu.active ? 'active' : ''} onClick={handleMoveToTab(menu.title)}>
          {menu.title}
        </li>
      ))}
    </Wrapper>
  );
}
