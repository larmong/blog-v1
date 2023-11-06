import Menu from "../../components/commons/layout/menu/Menu.container";
import Header from "../../components/commons/layout/header/Header.container";
import {
  Contents,
  Page,
  Wrapper,
} from "../../components/commons/layout/Layout.style";
import { useRecoilState } from "recoil";
import { routeState } from "../store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const [_, setRoute] = useRecoilState(routeState);

  useEffect(() => {
    setRoute(String(router.route.split("/")[1]));
  }, [router]);

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
