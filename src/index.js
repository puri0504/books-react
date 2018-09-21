import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import reducer from './reducers';

const store = createStore(reducer)
console.log(store.getState())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
