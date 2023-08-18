import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './store/userSlice';
import vaccineRegistrationSlice from './store/vaccineRegistrationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  vaccineRegister: vaccineRegistrationSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
