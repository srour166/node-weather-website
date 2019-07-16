const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ade398c60284bc6ffa121c1ee8fe08c9/'+ encodeURIComponent(longitude) + ','+encodeURIComponent(latitude)+'?units=si'
    request({ url, json: true} , (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)

        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature +' degrees out. There is a ' + body.currently.precipProbability +'% chance of rain')
        }
    })
}

module.exports = forecast