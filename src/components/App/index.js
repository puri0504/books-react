import React, {Component} from 'react';
import './style.css';
import NavBar from '../NavBar/index'
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "../NotFound";
import VisibleBookList from "../../routes/BookList";
import About from "../../routes/About";

class App extends Component {
    render() {
        return (
            <div className="App">
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
