import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //new embedded map and looks for the ref map element to render in
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    //so we can get this with this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
