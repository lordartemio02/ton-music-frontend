import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const index = localStorage.getItem("audioIndex");
const parsedIndex = parseInt(index ?? "0", 10);

const initialState: IMusicState = {
  list: musicList,
  currentMusic: musicList[parsedIndex],
  isAutoplay: false,
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
  },
});

export const { setCurrentMusic, setIsAutoplayMusic } = musicSlice.actions;

export default musicSlice.reducer;
