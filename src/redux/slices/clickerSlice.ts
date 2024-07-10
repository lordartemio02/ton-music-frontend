import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClickerState {
  money: number;
  lvlMining: number;
  lvlClick: number;
}

const initialState: ClickerState = {
  money: 0,
  lvlMining: 0,
  lvlClick: 0,
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    onSetMoney: (state: ClickerState, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
    onSetLvlMining: (state: ClickerState, action: PayloadAction<number>) => {
      state.lvlMining = action.payload;
    },
    onSetLvlClick: (state: ClickerState, action: PayloadAction<number>) => {
      state.lvlClick = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetMoney, onSetLvlMining, onSetLvlClick } =
  clickerSlice.actions;

export default clickerSlice.reducer;
