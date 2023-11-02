// store.ts
import { configureStore } from '@reduxjs/toolkit';
import startReducer from './slices/startSlice';
import operaReducer from './slices/operaSlice';

const store = configureStore({
  reducer: {
    start: startReducer,
    opera: operaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
