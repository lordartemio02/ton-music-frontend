import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "./api/api";
import musicSlice from "./state/musicSlice";

const rootReducer = combineReducers({
  music: musicSlice,
  [api.reducerPath]: api.reducer,
});

const { NODE_ENV } = import.meta.env;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
