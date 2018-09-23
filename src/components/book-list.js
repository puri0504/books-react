import React, {Component} from 'react';
import Book from './book/book'
import PropTypes from 'prop-types';

class BookList extends Component {
    state = {
        openId: null,
    }

    render() {
        //  const { books, actions } = this.props
        const books = this.props.books.map((book, index) =>
            <Book key={book.id}
                  book={book}
                  isOpen={this.state.openId === book.id}
                  onToggleOpen={e => this.handleOpen(book.id)}
                  onFavorite={e => this.addToFavorite(book.id)}
            />);

        return (
            <div className="books-list">
                <h1>Books list</h1>
                {books}
            </div>
        )
    }

    handleOpen = (openId) => this.setState({
        openId: openId === this.state.openId ? null : openId,
    })

    addToFavorite = (id) => {
        this.props.actions.toggleFavoriteDispatch(id);
        // this.props.history.push('/about');
    }
}

BookList.propTypes = {
    books: PropTypes.array,
    actions: PropTypes.object,
}

export default BookList;
