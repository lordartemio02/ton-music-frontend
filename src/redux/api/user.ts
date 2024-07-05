import { api } from "./api";

export const userApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    selectGenres: builder.mutation<void, any>({
      query: (body) => ({
        url: `profile/genres`,
        method: "POST",
        body: {
          list: body.list,
        },
      }),
    }),
  }),
});

export const { useSelectGenresMutation } = userApiSlice;
