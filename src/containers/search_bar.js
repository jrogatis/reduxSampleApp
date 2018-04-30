import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
  }

  onFormSubmit(ev) {
    ev.preventDefault();
    const { fetchWeather } = this.props;
    const { term } = this.state;
    fetchWeather(term);
    this.setState({ term: '' });
  }

  render() {
    const { term } = this.state;
    return (
      <form onSubmit={ev => this.onFormSubmit(ev)} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
