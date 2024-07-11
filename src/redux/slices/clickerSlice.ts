import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClickerState {
  money: number;
  energy: number;
  lvlMining: number;
  lvlClick: number;
  lvlBarEnergy: number;
  lvlRegenEnergy: number;
}

const initialState: ClickerState = {
  money: 0,
  energy: 0,
  lvlMining: 0,
  lvlClick: 1,
  lvlBarEnergy: 1,
  lvlRegenEnergy: 1,
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    onSetMoney: (
      state: ClickerState,
      action: PayloadAction<ClickerState["money"]>
    ) => {
      state.money = action.payload;
    },
    onSetEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlClick"]>
    ) => {
      state.energy = action.payload;
    },
    onSetLvlMining: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlMining"]>
    ) => {
      state.lvlMining = action.payload;
    },
    onSetLvlClick: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlClick"]>
    ) => {
      state.lvlClick = action.payload;
    },
    onSetLvlBarEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlBarEnergy"]>
    ) => {
      state.lvlBarEnergy = action.payload;
    },
    onSetLvlRegenEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlRegenEnergy"]>
    ) => {
      state.lvlRegenEnergy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetMoney,
  onSetLvlMining,
  onSetLvlClick,
  onSetEnergy,
  onSetLvlBarEnergy,
  onSetLvlRegenEnergy,
} = clickerSlice.actions;

export default clickerSlice.reducer;
