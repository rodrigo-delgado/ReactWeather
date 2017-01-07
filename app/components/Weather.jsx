var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
<<<<<<< HEAD
      isLoading: false
=======
      location: 'Arica',
      temp: 25
>>>>>>> 6a24269... get api working from open weather org
    }
  },

  heandleSearch: function (location) {
    var that = this

<<<<<<< HEAD
    this.setState({isLoading: true})


    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (erroMessage) {
      that.setState({isLoading: false})
      alert(errorMessage)
    })
  },
  render: function () {
    var {isLoading, temp, location} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
=======
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
>>>>>>> 6a24269... get api working from open weather org

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.heandleSearch}/>
<<<<<<< HEAD
          {renderMessage()}

=======
        <WeatherMessage temp={temp} location={location}/>
>>>>>>> 6a24269... get api working from open weather org
      </div>
    )
  }
})

module.exports = Weather
