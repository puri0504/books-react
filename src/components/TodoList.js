import React, { Component } from 'react';
import Todo from './Todo'
import tasks from '../mock/tasks'

class TodoList extends Component {
    render() {
        const todos = tasks.map(task => <Todo key={task.id} task={task}/>)

        return (
            <div>
                <h1>Todos list</h1>
                {todos}
            </div>
        )
    }
}

export default TodoList;