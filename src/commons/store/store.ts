import { atom } from "recoil";

export const routeState = atom<string>({
  key: "routeState",
  default: "/",
});

export const searchBarState = atom<boolean>({
  key: "searchBarState",
  default: false,
});

export const searchValueState = atom<string>({
  key: "searchValueState",
  default: "",
});
