import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Todo extends Component {
    render() {
        const desc = this.props.isOpen && <div>{this.props.task.desc}</div>
        const completed = this.props.task.completed ? <div className="completed">completed</div> : <button onClick={this.props.onComplete}>completed</button>

        return (
            <div className="Todo">
                <h3>{this.props.task.title}</h3>
                {desc}
                <button onClick={this.props.onToggleOpen}>{this.props.isOpen ? 'close' : 'show'}</button>
                {completed}
            </div>
        )
    }
}

Todo.propTypes = {
    task: PropTypes.object,
    isOpen: PropTypes.bool,
    onToggleOpen: PropTypes.func,
}

export default Todo;