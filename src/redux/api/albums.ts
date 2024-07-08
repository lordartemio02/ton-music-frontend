import { Album, ListAlbumsParams } from "../interfaces/Albums.interfaces";
import { DataResult } from "../interfaces/Data.interfaces";
import { IdT } from "../interfaces/Id.interfaces";
import { api } from "./api";

export const albumsApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getListAlbums: builder.query<DataResult<Album[]>, ListAlbumsParams>({
      query: (params) => ({
        url: `albums`,
        method: "GET",
        params,
      }),
    }),
    getCurrentAlbum: builder.query<Album, IdT>({
      query: (body) => ({
        url: `albums/${body.id}`,
        method: "GET",
      }),
    }),
    getListTracksCurrentAlbums: builder.query<DataResult<Album[]>, IdT>({
      query: (body) => ({
        url: `albums/${body.id}/tracks`,
        method: "GET",
      }),
    }),
    addFavoriteAlbums: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `albums/${body.id}/favorite`,
        method: "POST",
      }),
    }),
    deleteFavoriteAlbums: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `albums/${body.id}/favorite`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddFavoriteAlbumsMutation,
  useGetCurrentAlbumQuery,
  useDeleteFavoriteAlbumsMutation,
  useGetListAlbumsQuery,
  useGetListTracksCurrentAlbumsQuery,
} = albumsApiSlice;
