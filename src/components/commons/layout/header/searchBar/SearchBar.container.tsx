import { SearchIcon, Wrapper } from './SearchBar.style';
import { BiSearch } from 'react-icons/bi';

export default function HeaderSearchBar() {
	return (
		<Wrapper>
			<input type='text' />
			<SearchIcon>
				<BiSearch />
			</SearchIcon>
		</Wrapper>
	);
}
