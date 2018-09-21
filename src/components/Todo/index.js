import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Todo extends Component {
    render() {
        const desc = this.props.isOpen && <div>{this.props.task.desc}</div>

        return (
            <div className="Todo">
                <div>
                    <h3>{this.props.task.title}</h3>
                    {desc}
                    <div className="completed">{this.props.task.completed ? 'completed' : ''}</div>
                </div>
                <button onClick={this.props.onToggleOpen}>{this.props.isOpen ? 'close' : 'show'}</button>
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