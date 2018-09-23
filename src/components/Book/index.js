import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Book extends Component {
    render() {
        const desc = this.props.isOpen && <div className="desc">{this.props.book.desc}</div>
        const favorite = this.props.book.favorite ? <div className="favorite">favorite</div> : <button onClick={this.props.onFavorite}>favorite</button>

        return (
            <div className="Book">
                <div className="title">{this.props.book.title}</div>
                {desc}
                <button onClick={this.props.onToggleOpen}>{this.props.isOpen ? 'hide' : 'show more'}</button>
                {favorite}
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object,
    isOpen: PropTypes.bool,
    onToggleOpen: PropTypes.func,
    onFavorite: PropTypes.func,
}

export default Book;