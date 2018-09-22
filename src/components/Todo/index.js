import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Todo extends Component {
    render() {
        const desc = this.props.isOpen && <div className="desc">{this.props.task.desc}</div>
        const completed = this.props.task.completed ? <div className="completed">completed</div> : <button onClick={this.props.onComplete}>completed</button>

        return (
            <div className="Todo">
                <div className="title">{this.props.task.title}</div>
                {desc}
                <button onClick={this.props.onToggleOpen}>{this.props.isOpen ? 'hide' : 'show more'}</button>
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