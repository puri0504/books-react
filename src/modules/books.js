import React, {Component} from 'react';
import BookList from 'components/book-list'

class Books extends Component {
    render() {
        return (
            <div className="books">
                <BooksList />
            </div>
        )
    }
}
