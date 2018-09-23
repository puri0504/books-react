import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import NavBar from '../navbar/navbar'
import NotFound from '../not-found';
import VisibleBookList from '../../containers/routes/book-list';
import About from "../../containers/routes/about";
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar/>
                <Switch>
                    <Redirect from='/about-us' to='/about'/>
                    <Route exact path="/" component={VisibleBookList}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
