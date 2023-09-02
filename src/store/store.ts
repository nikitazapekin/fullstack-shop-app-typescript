import axios from 'axios';
import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
  
  },
  devTools: true,
  middleware: (getDefaultMiddlware) => getDefaultMiddlware({
    thunk: {
      extraArgument: {
        client: axios,
     
      },
    },
    serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: ()=> AppDispatch = useDispatch