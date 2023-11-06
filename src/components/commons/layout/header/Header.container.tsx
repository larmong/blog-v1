import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Bell,
  Menu,
  Mode,
  Router,
  Search,
  Title,
  TitleGroup,
  User,
  Wrapper,
} from "./Header.style";
import { BiSolidUser } from "react-icons/bi";
import {
  MdDarkMode,
  MdKeyboardDoubleArrowRight,
  MdLightMode,
} from "react-icons/md";
import { HiBell } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { routeState, searchBarState } from "../../../../commons/store/store";
import HeaderSearchBar from "./searchBar/SearchBar.container";

export default function Header() {
  const [router] = useRecoilState(routeState);
  const [searchBar] = useRecoilState(searchBarState);

  return (
    <Wrapper>
      <TitleGroup>
        <Router>
          {!router ? (
            "dashboard"
          ) : (
            <span>
              dashboard
              <MdKeyboardDoubleArrowRight />
              {router}
            </span>
          )}
        </Router>
        <Title>{!router ? "dashboard" : router}</Title>
      </TitleGroup>
      <Menu>
        <Search isOpen={searchBar}>
          <HeaderSearchBar />
        </Search>
        <Mode className="cursor-point">
          <MdDarkMode />
          {/*<MdLightMode />*/}
        </Mode>
        <Bell className="cursor-point">
          <HiBell />
        </Bell>
        <User>
          <BiSolidUser />
        </User>
      </Menu>
    </Wrapper>
  );
}
