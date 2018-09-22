import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import './style.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <Link to="/">Todos</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default NavBar;
