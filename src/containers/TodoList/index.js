import React, { Component } from 'react';
import Todo from '../../components/Todo/index'
import tasks from '../../mock/tasks'
import './style.css'

class TodoList extends Component {
    render() {
        const todos = tasks.map((task, index) => <Todo key={task.id} task={task} defaultIsOpen={index === 0} />)

        return (
            <div className="TodoList">
                <h1>Todos list</h1>
                {todos}
            </div>
        )
    }
}

export default TodoList;