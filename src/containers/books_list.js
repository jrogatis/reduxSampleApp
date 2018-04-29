import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BooksList extends Component {
  renderList() {
    const { books } = this.props;
    return books.map(book => (
      <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = dispatch => bindActionCreators({ selectBook }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
