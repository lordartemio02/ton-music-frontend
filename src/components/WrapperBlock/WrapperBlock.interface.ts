export interface IWrapperBlock {
  title: string;
  children: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
