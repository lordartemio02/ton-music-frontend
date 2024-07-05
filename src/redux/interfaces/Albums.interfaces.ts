import { Artist } from "./Artist.interfaces";
import { NewLest } from "./Data.interfaces";
import { Track } from "./Track.interfaces";

export type Album = Track & Artist;

export type ListAlbumsParams = {
  artist_id: number;
  is_popular: number;
} & NewLest;
