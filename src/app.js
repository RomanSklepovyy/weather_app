const request = require('request');
const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const app = express();

app.get('', (req, res) => {
    res.send('Hello world!');
});

app.get('/help', (req, res) => {
    res.send('Help page!');
});

app.get('/about', (req, res) => {
    res.send('About page!');
});

app.get('/weather', (req, res) => {
    res.send('Weather!');
});

app.listen(3000, () => {
    console.log('Server is on port 3000.');
});
/*
geocode('Kyiv', (error, {latitude, longitude, location}) => {
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    });
});
*/
