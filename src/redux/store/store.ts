// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../slices/toastSlice"

export const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
