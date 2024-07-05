import { DataResult } from "../interfaces/Data.interfaces";
import { Genre } from "../interfaces/Genres.interfaces";
import { api } from "./api";

export const genresApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<DataResult<Genre[]>, void>({
      query: () => ({
        url: `genres`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGenresQuery } = genresApiSlice;
