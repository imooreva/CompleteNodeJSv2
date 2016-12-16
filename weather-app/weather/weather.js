const request = require('request');

var getWeather = (lat, lng, callback) => {    
    request({        
        url: `https://api.darksky.net/forecast/6f4d9c2b1f3d456e21edaecc4e243118/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature                
            });
            //console.log(`Temperature: ${body.currently.temperature}`);
            //console.log(`Feels like: ${body.currently.apparentTemperature}`);            
        }
    });
}

module.exports.getWeather = getWeather;