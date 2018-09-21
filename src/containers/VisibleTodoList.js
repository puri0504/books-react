import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'
import { getTodos } from '../selectors'

const mapStateToProps = state => {
  return {
    todos: getTodos(state)
  }
}

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(TodoActions, dispatch)
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(TodoList)