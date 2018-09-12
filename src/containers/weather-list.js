import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp - 219.67);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temp} color="red" units="F" />
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%" />
        </td>
        <td />
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

//talking about the keys in root reducers
// this function takes in the state from our root reducer and returns the weather
//key
function mapStateToProps({ weather }) {
  return { weather };
}
//this function takes the weather key and connects the data to the props
//of our class based item here
export default connect(mapStateToProps)(WeatherList);
