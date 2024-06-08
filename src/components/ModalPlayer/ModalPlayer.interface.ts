import { IModal } from "../Modal/Modal.interface";

export interface IModalPlayer extends Omit<IModal, "children"> {
  onChangeRate: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
