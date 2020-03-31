const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2f067ec8fbe228f0f63e90066b5715e0/${latitude},${longitude}?units=si&exclude=minutely,hourly,flags`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable connect to weather service!', undefined);
        }
        else if (body.error) {
            callback('Unable to find location!', undefined);
        }
        else {
            callback(undefined, body);
        }

    });
};

module.exports = forecast;

