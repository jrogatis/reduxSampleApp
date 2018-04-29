import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(ev) {
    console.info(ev.target.value);
    this.setState({ term: ev.target.value });
  }
  render() {
    const { term } = this.props;
    return (
      <form className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cisites"
          className="form-control"
          value={term}
          onChange={ev => this.onInputChange(ev)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
