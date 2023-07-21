import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './store/userSlice';

const rootReducer = combineReducers({
  user: userSlice
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: []
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
