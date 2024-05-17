import { InputHTMLAttributes } from "react";

export interface IProgressBar
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}
