// operaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StartState {
  value: boolean;
}

const initialState: StartState = {
  value: false,
};

const operaSlice = createSlice({
  name: 'opera',
  initialState,
  reducers: {
    setOpera: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setOpera } = operaSlice.actions;

export default operaSlice.reducer;