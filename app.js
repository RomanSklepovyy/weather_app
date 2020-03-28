const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }
});

geocode('Kyiv', (error, data) => {

    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }

});