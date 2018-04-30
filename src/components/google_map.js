import React, { Component } from 'react';

class googleMap extends Component {
  componentDidMount() {
    const { lat, lon } = this.props;
    console.log(lat, lon);

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat,
        lng: lon,
      },
    });
  }

  render() {
    return <div ref="map"> </div>;
  }
}

export default googleMap;
