import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import runSaga from 'redux-saga';
import SagaData from './saga';

const sagaMiddleware = runSaga();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(SagaData);
export default store;
