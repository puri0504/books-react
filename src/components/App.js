import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import VisibleTodoList from '../containers/VisibleTodoList';
import About from './About';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Todos</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <div className="App">
                        <Route exact path="/" component={VisibleTodoList}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
