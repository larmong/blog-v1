import Menu from '../../components/commons/layout/menu/Menu.container';
import Header from '../../components/commons/layout/header/Header.container';
import { Contents, Page, Wrapper } from '../../components/commons/layout/Layout.style';

interface ILayoutProps {
	children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
	return (
		<Wrapper>
			<Menu />
			<Page>
				<Header />
				<Contents>{props.children}</Contents>
			</Page>
		</Wrapper>
	);
}
