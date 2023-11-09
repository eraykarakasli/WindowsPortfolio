// operaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StartState {
  value: boolean;
  value2: boolean;
  value3: boolean;
}

const initialState: StartState = {
  value: false,
  value2: false,
  value3: false,
};

const operaSlice = createSlice({
  name: 'opera',
  initialState,
  reducers: {
    setOpera: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setFolder: (state, action : PayloadAction<boolean>) =>{
      state.value2 = action.payload;
    },
    setRecycle: (state, action : PayloadAction<boolean>) =>{
      state.value3 = action.payload;
    }
  },
});

export const { setOpera, setFolder, setRecycle } = operaSlice.actions;

export default operaSlice.reducer;