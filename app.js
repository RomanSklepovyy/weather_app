const request = require('request');

const url = 'https://api.darksky.net/forecast/2f067ec8fbe228f0f63e90066b5715e0/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});