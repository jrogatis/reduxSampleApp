import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {
  renderList() {
    const { books } = this.props;
    return books.map(book => (
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(BooksList);
