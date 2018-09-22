import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './components/App/index';
import reducer from './reducers';
import NotFound from "./components/NotFound";
import DynamicImport from "./components/DynamicImport";

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

const VisibleTodoList = (props) => (
    <DynamicImport load={() => import('./containers/VisibleTodoList')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)

const About = (props) => (
    <DynamicImport load={() => import('./components/About')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)

render(
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <App/>
                <Switch>
                    <Redirect from='/about-us' to='/about'/>
                    <Route exact path="/" component={VisibleTodoList}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </React.Fragment>
        </Router>
    </Provider>,
    document.getElementById('root')
);
