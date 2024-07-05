import { IdT } from "./Id.interfaces";

export type Playlist = {
  id: number;
  name: string;
  coverImage: string;
  author: Author;
};

export type Author = {
  id: number;
  username: string;
  avatar: string;
};

export type AddToPlaylistBody = {
  playlist_id: number;
} & IdT;

export type AddPlaylistBody = {
  name: string;
};
