import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import slices from './src/slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from './src/sagas';
import persistStore from 'redux-persist/lib/persistStore';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
let rootReducer = combineReducers(slices);

let persistConfig = {key: 'root', storage: AsyncStorage};
let persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
