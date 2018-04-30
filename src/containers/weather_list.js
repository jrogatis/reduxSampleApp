import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const {
      city: {
        name,
        coord: { lon, lat },
      },
      list,
    } = cityData;

    const temps = list.map(weather => weather.main.temp);
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature(K) </th>
            <th> Pressure(hPa) </th>
            <th> Humidity(%) </th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(city => this.renderWeather(city))} </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(WeatherList);
