import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const { book } = this.props;
    if (!book) return <div> Select a book to get started. </div>;
    return (
      <div>
        <h3>Details for:</h3>
        <div> Title: {book.title} </div>
        <div> pages: {book.pages} </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeBook }) => ({
  book: activeBook,
});

export default connect(mapStateToProps)(BookDetail);
