import React, {Component} from 'react';
import VisibleBookList from 'containers/visible-book-list';
// import BookList from 'components/book-list'

class Books extends Component {
    render() {
        return (
            <div className="books">
                <VisibleBookList />
            </div>
        )
    }
}

export default Books;
