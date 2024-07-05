import { User } from "../interfaces/Auth.intefaces";
import { DataResult } from "../interfaces/Data.interfaces";
import { api } from "./api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<DataResult<User>, void>({
      query: () => ({
        url: `auth/me`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = authApiSlice;
