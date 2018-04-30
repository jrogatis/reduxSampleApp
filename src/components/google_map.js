import React, { Component } from 'react';

class googleMap extends Component {
  componentDidMount() {
    const { lat, lon } = this.props;

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat,
        lon,
      },
    });
  }

  render() {
    return <div ref="map"> </div>;
  }
}

export default googleMap;
