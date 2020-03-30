const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2f067ec8fbe228f0f63e90066b5715e0/
    ${latitude},${longitude}?units=si&exclude=minutely,hourly,flags`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable connect to weather service!', undefined);
        }
        else if (body.error) {
            callback('Unable to find location!', undefined);
        }
        else {
            callback(undefined, getCurrentlyObj(body.currently);
        }

    });
};

const getDailyObj = (dailyData) => {

    return  { summary, precipProbability, precipType = 'none', temperatureMax, temperatureMin,
            temperatureMaxTime, temperatureMinTime, sunriseTime, sunsetTime, windSpeed,
            presure, time} = dailyData;
};

const getCurrentlyObj = (currentlyData) => {

    return {time, summary, precipProbability, temperature, apparentTemperature,
        windSpeed, pressure} = currentlyData;
};

module.exports = forecast;