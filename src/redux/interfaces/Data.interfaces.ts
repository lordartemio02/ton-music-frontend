import { Meta } from "./Meta.interfaces";

export type DataResult<T> = {
  data: T;
};

export type DataResultMeta<T> = {
  meta: Meta;
} & DataResult<T>;

export type NewLest = {
  is_newlest?: boolean;
};
