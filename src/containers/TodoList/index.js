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
        const todos = tasks.map((task, index) =>
            <Todo key={task.id}
                  task={task}
                  isOpen={this.state.openTodoId === task.id}
                  onToggleOpen={this.handleOpen.bind(this, task.id)}
                  onComplete={this.complete.bind(this, task.id)}
            />)

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
        console.log('complete', todoId)
    }
}

const mapStateToProps = state => {
    console.log('fsdf')
    return {
        tasks1: state,
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
)(TodoList)

console.log(VisibleTodoList)

export default TodoList;