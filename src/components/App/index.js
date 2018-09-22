import React, {Component} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import VisibleTodoList from '../../containers/VisibleTodoList';
import About from '../About';
import NotFound from '../NotFound'
import './style.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="nav-menu">
                    <Link to="/">Todos</Link>
                    <Link to="/about">About</Link>
                </nav>

                <Switch>
                    <Route exact path="/" component={VisibleTodoList}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="*" component={NotFound} />
            </Switch>
            </React.Fragment>
        );
    }
}

export default App;
