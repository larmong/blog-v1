import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useRecoilState } from "recoil";

import { CustomChangeEvent } from "../../../../../commons/types/global.types";
import { SearchBar, SearchIcon, Wrapper } from "./SearchBar.style";
import {
  searchBarState,
  searchValueState,
} from "../../../../../commons/store/store";

export default function HeaderSearchBar() {
  const [searchBar, setSearchBar] = useRecoilState(searchBarState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleOpenSearchBar = () => {
    setSearchBar((props: boolean) => !props);
    setSearchValue("");
  };

  const handleOnSearch = () => {
    // 검색
    console.log(searchValue);
    handleOpenSearchBar();
  };

  const handleChangeSearchValue = (e: CustomChangeEvent) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBar
        type="text"
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <SearchIcon
        className="cursor-point"
        onClick={searchBar ? handleOnSearch : handleOpenSearchBar}
      >
        <BiSearch />
      </SearchIcon>
    </Wrapper>
  );
}
