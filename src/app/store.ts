import {
  AnyAction,
  applyMiddleware,
  compose,
  Dispatch,
  legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;
export type AppDispatchType = Dispatch<AnyAction>;

sagaMiddleware.run(rootSaga);
