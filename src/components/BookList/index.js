import React, {Component} from 'react';
import Book from '../Book/index'
import './style.css'

class BookList extends Component {
    state = {
        openTodoId: null,
    }

    render() {
        //  const { books, actions } = this.props
        const books = this.props.books.map((book, index) =>
            <Book key={book.id}
                  book={book}
                  isOpen={this.state.openTodoId === book.id}
                  onToggleOpen={e => this.handleOpen(book.id)}
                  onFavorite={e => this.addToFavorite(book.id)}
            />);

        return (
            <div className="BooksList">
                <h1>Todo list</h1>
                {books}
            </div>
        )
    }

    handleOpen = (openId) => this.setState({
        openTodoId: openId === this.state.openTodoId ? null : openId,
    })

    addToFavorite = (id) => {
        this.props.actions.addFavorite(id);
        // this.props.history.push('/about');
    }
}

export default BookList;
