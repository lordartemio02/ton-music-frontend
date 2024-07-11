import { Artist } from "../interfaces/Artist.interfaces";
import { DataResultMeta, NewLest } from "../interfaces/Data.interfaces";
import { IdT } from "../interfaces/Id.interfaces";
import { api } from "./api";

export const artistApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getListArtist: builder.query<DataResultMeta<Artist[]>, NewLest>({
      query: (params) => ({
        url: `artists`,
        method: "GET",
        params,
      }),
    }),
    getCurrentArtist: builder.query<Artist, IdT>({
      query: (body) => ({
        url: `artists/${body.id}`,
        method: "GET",
      }),
    }),
    addFavoriteArtist: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `artists/${body.id}/favorite`,
        method: "POST",
      }),
    }),
    deleteFavoriteArtist: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `delete/${body.id}/favorite`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddFavoriteArtistMutation,
  useGetCurrentArtistQuery,
  useDeleteFavoriteArtistMutation,
  useGetListArtistQuery,
} = artistApiSlice;
