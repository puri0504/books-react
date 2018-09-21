import React, { Component } from 'react';
import Todo from '../../components/Todo/index'
import tasks from '../../mock/tasks'
import {connect} from 'react-redux';
import './style.css'

class TodoList extends Component {
    state = {
        openTodoId: null,
    }

    render() {
        console.log(this.store)
        const todos = tasks.map((task, index) => <Todo key={task.id} task={task} isOpen={this.state.openTodoId === task.id} onToggleOpen={this.handleOpen.bind(this, task.id)} />)

        return (
            <div className="TodoList">
                <h1>Todo list</h1>
                {todos}
            </div>
        )
    }

    handleOpen = (openTodoId) => this.setState({
        openTodoId: openTodoId === this.state.openTodoId ? null : openTodoId,
    })
}

function mapStateToProps(state) {
    return {
        tasks: state.get('tasks')
    };
}

connect(mapStateToProps)(TodoList);

export default TodoList;