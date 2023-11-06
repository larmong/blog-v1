import { useRouter } from "next/router";
import { HiHome } from "react-icons/hi";
import { BiSolidDashboard, BiSolidUser } from "react-icons/bi";
import { BsFillBarChartFill, BsFillPostcardHeartFill } from "react-icons/bs";

import { Icon, Item, Logo, MenuList, Name, Wrapper } from "./Menu.style";
import { MenuTypes } from "./Menu.types";
import { useRecoilState } from "recoil";
import { routeState } from "../../../../commons/store/store";
import { useEffect, useState } from "react";
import { FiGitCommit } from "react-icons/fi";

export default function Menu() {
  const router = useRouter();
  const [route] = useRecoilState(routeState);
  const [menuList, setMenuList] = useState([
    {
      active: true,
      icon: <HiHome />,
      name: "dashboard",
      route: "",
    },
    {
      active: false,
      icon: <BiSolidUser />,
      name: "profile",
      route: "profile",
    },
    {
      active: false,
      icon: <BiSolidDashboard />,
      name: "project",
      route: "project",
    },
    {
      active: false,
      icon: <BsFillPostcardHeartFill />,
      name: "post",
      route: "post",
    },
    {
      active: false,
      icon: <BsFillBarChartFill />,
      name: "guest book",
      route: "guestbook",
    },
    {
      active: false,
      icon: <FiGitCommit />,
      name: "log",
      route: "log",
    },
  ]);

  useEffect(() => {
    setMenuList(
      menuList.map((menu: MenuTypes) => {
        if (menu.route === route) {
          return { ...menu, active: true };
        } else {
          return { ...menu, active: false };
        }
      }),
    );
  }, [route]);

  const handleMoveToMenu = (route: string) => () => {
    void router.push(`/${route}`);
  };

  return (
    <Wrapper>
      <Logo></Logo>
      <MenuList>
        {menuList.map((menu: MenuTypes, index: number) => (
          <Item key={index} className={menu.active ? "active" : ""}>
            <Icon>{menu.icon}</Icon>
            <Name onClick={handleMoveToMenu(menu.route)}>{menu.name}</Name>
          </Item>
        ))}
      </MenuList>
    </Wrapper>
  );
}
