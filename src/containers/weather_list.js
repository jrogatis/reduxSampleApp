import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
      </table>
    );
  }
}

const mapStateToProps = ({ wheather }) => ({ wheather });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(WeatherList);
