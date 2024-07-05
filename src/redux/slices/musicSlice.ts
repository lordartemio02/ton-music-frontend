import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NAME_AUDIO_INDEX } from "../../config";
import musicList from "../../mock/audiolist.json";

type TMusic = {
  id: number;
  name: string;
  artist: string;
  img: number;
  link: string;
};

interface IMusicState {
  list: TMusic[];
  currentMusic: TMusic;
  isAutoplay?: boolean;
  index: number;
}

const index = localStorage.getItem(NAME_AUDIO_INDEX);
const parsedIndex = parseInt(index ?? "0", 10);

const initialState: IMusicState = {
  list: musicList,
  currentMusic: musicList[parsedIndex],
  isAutoplay: false,
  index: parsedIndex,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setCurrentMusic: (
      state: IMusicState,
      action: PayloadAction<IMusicState["currentMusic"]>
    ) => {
      state.currentMusic = action.payload;
    },

    setIsAutoplayMusic: (
      state: IMusicState,
      action: PayloadAction<IMusicState["isAutoplay"]>
    ) => {
      state.isAutoplay = action.payload;
    },
    setIndexMusic: (
      state: IMusicState,
      action: PayloadAction<IMusicState["index"]>
    ) => {
      localStorage.setItem(NAME_AUDIO_INDEX, action.payload.toString());
      state.index = action.payload;
    },
  },
});

export const { setCurrentMusic, setIsAutoplayMusic, setIndexMusic } =
  musicSlice.actions;

export default musicSlice.reducer;
