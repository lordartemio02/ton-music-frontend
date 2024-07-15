import { ButtonProps } from "@telegram-apps/telegram-ui";

export interface IEarnList {
  title: string;
  subtitle: string;
  description: string;
  boost: string;
  icon: any;
  buttons: {
    title: string;
    mode: ButtonProps["mode"];
    onClick: () => void;
  }[];
}
