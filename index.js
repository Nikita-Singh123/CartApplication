import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import 'react-input-range/lib/css/index.css';
import combineAllReducers from './Reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    combineAllReducers,
    applyMiddleware(thunk),
);

store.subscribe(()=>{
    //console.log("store",store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
   document.getElementById('root')
)