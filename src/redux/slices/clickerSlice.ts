import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClickerState {
  money: number;
}

const initialState: ClickerState = {
  money: 0,
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    onSetMoney: (state: ClickerState, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetMoney } = clickerSlice.actions;

export default clickerSlice.reducer;
