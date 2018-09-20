import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Todo extends Component {
    state = {
        isShow: this.props.defaultIsOpen,
    }

    componentWillMount() {
        console.log(this.state.isShow)
    }

    render() {
        const desc = this.state.isShow && <div>{this.props.task.desc}</div>

        return (
            <div className="Todo">
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

Todo.propTypes = {
    task: PropTypes.object,
}

export default Todo;