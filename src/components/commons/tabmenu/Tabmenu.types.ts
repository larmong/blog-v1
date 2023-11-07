export interface IPropsTabMenu {
	menu: TabMenuTypes[];
	setMenu: ([]) => void;
}

export interface TabMenuTypes {
	title: string;
	active: boolean;
}
