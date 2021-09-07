import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import App from './App';
import { rootReducer } from './redux/rootReducers'
import {sagaWatcher} from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
  sagaMiddleware
),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

sagaMiddleware.run(sagaWatcher)

render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>

    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
