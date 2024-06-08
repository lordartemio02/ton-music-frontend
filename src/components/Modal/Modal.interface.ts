export interface IModal {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
