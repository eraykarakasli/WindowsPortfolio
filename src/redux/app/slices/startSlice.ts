// startSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StartState {
  isLoading: boolean;
}

const initialState: StartState = {
  isLoading: false,
};

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = startSlice.actions;

export default startSlice.reducer;
