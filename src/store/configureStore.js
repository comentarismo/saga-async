import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from 'redux-saga-devtools'

import rootReducer from '../reducers'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}
