export type TabsDataListType = {
  title: string;
  children: JSX.Element;
};

export interface ICustomTabsList {
  dataList: TabsDataListType[];
}
