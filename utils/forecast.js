const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=4cf2d3514de22c1a879f1c9cce0a5f02'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.weather[0].main)
            callback(undefined, ' It is currently ' + body.weather[0].main)
        }
    })
}

module.exports = forecast