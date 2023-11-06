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
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiBell } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { searchBarState } from "../../../../commons/store/store";
import HeaderSearchBar from "./searchBar/SearchBar.container";

export default function Header() {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const [title, setTitle] = useState("");
  const [searchBar] = useRecoilState(searchBarState);

  useEffect(() => {
    const route = String(router.route.split("/")[1]);
    if (router.route === "/") {
      setRoute("dashboard");
      setTitle("dashboard");
    } else {
      setRoute(`dashboard > ${route}`);
      setTitle(route);
    }
  }, [router]);

  return (
    <Wrapper>
      <TitleGroup>
        <Router>{route}</Router>
        <Title>{title}</Title>
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
