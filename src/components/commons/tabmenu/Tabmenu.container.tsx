import { Wrapper } from './Tabmenu.style';
import { IPropsTabMenu, TabMenuTypes } from './Tabmenu.types';
import { useEffect, useState } from 'react';

export default function TabMenu(props: IPropsTabMenu) {
	const [isTabMenu, setIsTabMenu] = useState(props.menu[0].title);

	const handleMoveToTab = (menu: string) => () => {
		// menu => 누른 탭메뉴 통해서 검색
		setIsTabMenu(menu);
	};

	useEffect(() => {
		props.setMenu(
			props.menu.map((menu) => {
				if (menu.title === isTabMenu) {
					return { ...menu, active: true };
				} else {
					return { ...menu, active: false };
				}
			}),
		);
	}, [isTabMenu]);

	return (
		<Wrapper>
			{props.menu.map((menu: TabMenuTypes, index: number) => (
				<li
					key={index}
					className={menu.active ? 'active' : ''}
					onClick={handleMoveToTab(menu.title)}>
					{menu.title}
				</li>
			))}
		</Wrapper>
	);
}
