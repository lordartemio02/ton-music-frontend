import { DataResult, DataResultMeta } from "../interfaces/Data.interfaces";
import { IdT } from "../interfaces/Id.interfaces";
import { AddToPlaylistBody } from "../interfaces/Playlists.interfaces";
import { Track, TracksParams } from "../interfaces/Track.interfaces";
import { api } from "./api";

export const tracksApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    listTracks: builder.query<DataResultMeta<Track[]>, TracksParams>({
      query: (params) => ({
        url: `tracks`,
        method: "GET",
        params,
      }),
    }),
    tracksRec: builder.query<DataResult<Track[]>, void>({
      query: () => ({
        url: `tracks/recommendation`,
        method: "GET",
      }),
    }),
    addFavoriteTrack: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `tracks/${body.id}/favorite`,
        method: "POST",
      }),
    }),
    deleteFavoriteTrack: builder.mutation<void, IdT>({
      query: (body) => ({
        url: `tracks/${body.id}/favorite`,
        method: "DELETE",
      }),
    }),
    addToPlaylistTrack: builder.mutation<void, AddToPlaylistBody>({
      query: (body) => ({
        url: `tracks/${body.id}/addToPlaylist`,
        method: "POST",
        body: {
          playlist_id: body.playlist_id,
        },
      }),
    }),
  }),
});

export const {
  useAddFavoriteTrackMutation,
  useAddToPlaylistTrackMutation,
  useDeleteFavoriteTrackMutation,
  useListTracksQuery,
  useTracksRecQuery,
} = tracksApiSlice;
