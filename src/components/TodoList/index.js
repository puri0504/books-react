import React, {Component} from 'react';
import Todo from '../Todo/index'
import './style.css'

class TodoList extends Component {
    state = {
        openTodoId: null,
    }

    render() {
        //  const { todos, actions } = this.props
        const todos = this.props.todos.map((task, index) =>
            <Todo key={task.id}
                  task={task}
                  isOpen={this.state.openTodoId === task.id}
                  onToggleOpen={e => this.handleOpen(task.id)}
                  onComplete={e => this.complete(task.id)}
            />);

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

    complete = (todoId) => {
        this.props.actions.completeTodo(todoId);
        // this.props.history.push('/about');
    }
}

export default TodoList;
