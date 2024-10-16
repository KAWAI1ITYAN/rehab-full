import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { modalsSlice } from './reviews/slice.ts';
import { viewsApi } from './reviews/api.ts';


export const store = configureStore({
  reducer: {
    [modalsSlice.name]: modalsSlice.reducer,
    [viewsApi.reducerPath]: viewsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(viewsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
