import { Artist } from "./Artist.interfaces";

export type Track = {
  id: number;
  name: string;
  coverImage: string;
  sourceLink?: string;
  artists: Artist[];
};

export type TracksParams = {
  q: string;
  is_popular: boolean;
  is_recomendation: boolean;
  artist_id: number;
};
