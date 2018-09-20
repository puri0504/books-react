import React, { Component } from 'react';

class TodoList extends Component {
    state = {
        isShow: false,
    }

    render() {
        const desc = this.state.isShow && this.props.task.desc

        return (
            <div>
                <div>
                    <h3>{this.props.task.title}</h3>
                    {desc}
                </div>
                <button onClick={this.toggleShow}>{this.state.isShow ? 'close' : 'show'}</button>
            </div>
        )
    }

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow,
        })
    }
}

export default TodoList;