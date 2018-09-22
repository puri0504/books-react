import React, {Component} from 'react';
import {
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-dom';
// import VisibleTodoList from '../../containers/VisibleTodoList';
// import About from '../About';
import DynamicImport from '../DynamicImport';
import NotFound from '../NotFound'
import './style.css';

const VisibleTodoList = (props) => (
    <DynamicImport load={() => import('../../containers/VisibleTodoList')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)

const About = (props) => (
    <DynamicImport load={() => import('../About')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="nav-menu">
                    <Link to="/">Todos</Link>
                    <Link to="/about">About</Link>
                </nav>

                <Switch>
                    <Redirect from='/about-us' to='/about'/>
                    <Route exact path="/" component={VisibleTodoList}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
