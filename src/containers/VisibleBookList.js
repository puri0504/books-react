import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BooksActions from '../actions'
import BookList from '../components/BookList'
import { getBooks } from '../selectors'

const mapStateToProps = state => {
  return {
    books: getBooks(state)
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BooksActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)