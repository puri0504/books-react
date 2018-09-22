import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import './style.css';

class App extends Component {
    render() {
        return (
            <nav className="nav-menu">
                <Link to="/">Todos</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default App;
