import { applyMiddleware, createStore, compose } from 'redux';

//import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/index';
import getRootReducer from './Reducers/index';
import { persistStore } from 'redux-persist';
// create the saga applyMiddleware
const sagaMiddleware = createSagaMiddleware();

export default function getStore(){
  
  const store = createStore(getRootReducer(), applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

	return { store, persistor };
}
