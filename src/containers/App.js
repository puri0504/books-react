import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import TodoList from './TodoList'
import About from './About'

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
              <Route exact path="/" component={TodoList}/>
              <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
