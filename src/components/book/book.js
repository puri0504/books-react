import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './book.css'

class Book extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        const desc = this.props.isOpen && <div className="desc">{this.props.book.desc}</div>
        const bookCssClasses = 'book' + (this.props.book.favorite ? ' favorite' : '')

        return (
            <div className={bookCssClasses}>
                <div ref={this.myRef} className="title">{this.props.book.title}</div>
                {desc}
                <button onClick={this.props.onToggleOpen}>{this.props.isOpen ? 'hide' : 'show more'}</button>
                <button onClick={this.props.onFavorite}>{this.props.book.favorite ? 'unfavorite' : 'favorite'}</button>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.myRef)
    }
}

Book.propTypes = {
    book: PropTypes.object,
    isOpen: PropTypes.bool,
    onToggleOpen: PropTypes.func,
    onFavorite: PropTypes.func,
}

export default Book;