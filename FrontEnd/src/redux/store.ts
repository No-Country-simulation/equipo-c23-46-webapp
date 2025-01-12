import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'

// se añadio otro slice como ejemplo adicional, "productSlice" no sera persistente
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist/es/constants'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] // aqui se indica que se persiste 'user'
}

const rootReducer = combineReducers({
  user: userReducer // 'user' será persistido
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer, // Usamos persistedReducer directamente
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // Ignoramos acciones de persistencia
      }
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
