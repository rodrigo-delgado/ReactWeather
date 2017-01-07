var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Arica',
      temp: 25
    }
  },

  heandleSearch: function (location) {
    var that = this

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      })
    }, function (erroMessage) {
        alert(errorMessage)
    })
  },
  render: function () {
    var {temp, location} = this.state

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.heandleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
})

module.exports = Weather
