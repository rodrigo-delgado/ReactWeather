var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=3bf9aa9dd698e6fd4bdfbea488eaaef8&units=metric'

//3bf9aa9dd698e6fd4bdfbea488eaaef8


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
}