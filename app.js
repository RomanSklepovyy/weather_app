const request = require('request');
const geocode = require('./utils/geocode');
/*
const url = 'https://api.darksky.net/forecast/2f067ec8fbe228f0f63e90066b5715e0/37.8267,-122.4233?units=si&lang=uk';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable connect to weather service!');
    }
    else if (response.body.error) {
        console.log('Unable to find location!');
    }
    else {
        console.log(response.body.currently);
    }

});
*/


geocode('Kyiv', (error, data) => {

    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }

});