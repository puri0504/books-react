import React, {Component} from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import VisibleTodoList from '../containers/VisibleTodoList';
import About from './About';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <Link to="/">Todos</Link>
                    <Link to="/about">About</Link>
                </nav>

                <Route exact path="/" component={VisibleTodoList}/>
                <Route path="/about" component={About}/>
            </React.Fragment>
        );
    }
}

export default App;
