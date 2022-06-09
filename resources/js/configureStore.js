/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router'

import history from "./utils/history";

export default function configureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

    const persistConfig = {
        key: 'root',
        version: 1,
        storage,
        blacklist: [],
        timeout: 0,
    };

  const store = configureStore({
    reducer: persistReducer(persistConfig, createReducer()),
    middleware: [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}
