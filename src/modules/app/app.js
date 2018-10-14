import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import NavBar from 'components/navbar/navbar'
import NotFound from 'modules/not-found';
import Books from 'containers/routes/books';
import About from 'containers/routes/about';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar/>
                <Switch>
                    <Redirect from='/about-us' to='/about'/>
                    <Route exact path='/' component={Books}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
