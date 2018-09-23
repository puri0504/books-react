import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './components/App/index';
import reducer from './reducers';

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger),
);

render(
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <App/>
            </React.Fragment>
        </Router>
    </Provider>,
    document.getElementById('root')
);

