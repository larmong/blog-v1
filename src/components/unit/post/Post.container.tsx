import { TableContainer, Wrapper } from './Post.style';
import TabMenu from '../../commons/tabmenu/Tabmenu.container';
import { useState } from 'react';

export default function PostContainer() {
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
			<TableContainer>테이블</TableContainer>
		</Wrapper>
	);
}
