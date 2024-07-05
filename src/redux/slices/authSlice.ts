import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken?: string;
}

const initialState: AuthState = {
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onTokenAccess: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onTokenAccess } = authSlice.actions;

export default authSlice.reducer;
