import React from 'react';
import {
    Link
} from 'react-router-dom';

const NotFound = () =>
    <div>
        <h3>404 page not found</h3>
        <div>We are sorry but the page you are looking for does not exist.</div>
        <div>Go to <Link to="/">main page</Link></div>
    </div>

export default NotFound;