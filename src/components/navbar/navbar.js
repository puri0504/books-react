import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">Books</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default NavBar;
