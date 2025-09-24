import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app';

// Define a type for the slice state
interface State {
  isDarkMode: boolean,
}

// Define the initial state using that type
const initialState: State = {
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { switchTheme } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsDarkMode = (state: RootState) => state.global.isDarkMode;

export const globalReducer = globalSlice.reducer;
