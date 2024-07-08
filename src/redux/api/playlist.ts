import { DataResult, DataResultMeta } from "../interfaces/Data.interfaces";
import { IdT } from "../interfaces/Id.interfaces";
import { AddPlaylistBody, Playlist } from "../interfaces/Playlists.interfaces";
import { Track } from "../interfaces/Track.interfaces";
import { api } from "./api";

export const playlistApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getListPlaylist: builder.query<DataResult<Playlist[]>, void>({
      query: () => ({
        url: `playlists`,
        method: "GET",
      }),
    }),
    getCurrentPlaylist: builder.query<Playlist, IdT>({
      query: (body) => ({
        url: `playlists/${body.id}`,
        method: "GET",
      }),
    }),
    getListTracksCurrentPlaylist: builder.query<DataResultMeta<Track[]>, IdT>({
      query: (body) => ({
        url: `playlists/${body.id}/tracks`,
        method: "GET",
      }),
    }),
    addFavoriteToPlaylist: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `playlists/${body.id}/favorite`,
        method: "POST",
      }),
    }),
    deleteFavoriteOnPlaylist: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `playlists/${body.id}/favorite`,
        method: "DELETE",
      }),
    }),
    addToPlaylist: builder.mutation<void, AddPlaylistBody>({
      query: (body) => ({
        url: `playlists`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAddFavoriteToPlaylistMutation,
  useAddToPlaylistMutation,
  useGetCurrentPlaylistQuery,
  useDeleteFavoriteOnPlaylistMutation,
  useGetListPlaylistQuery,
  useGetListTracksCurrentPlaylistQuery,
} = playlistApiSlice;
