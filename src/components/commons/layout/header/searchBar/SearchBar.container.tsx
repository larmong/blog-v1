import { SearchIcon, Wrapper } from "./SearchBar.style";
import { BiSearch } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { searchBarState } from "../../../../../commons/store/store";
import { useEffect } from "react";

export default function HeaderSearchBar() {
  const [searchBar, setSearchBar] = useRecoilState(searchBarState);

  const handleOpenSearchBar = () => {
    setSearchBar((props) => !props);
  };

  useEffect(() => {
    // input 초기화
  }, [searchBar]);

  return (
    <Wrapper>
      <input type="text" />
      <SearchIcon className="cursor-point" onClick={handleOpenSearchBar}>
        <BiSearch />
      </SearchIcon>
    </Wrapper>
  );
}
