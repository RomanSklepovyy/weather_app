const request = require('request');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Roman Sklepovyy'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Roman Sklepovyy'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Roman Sklepovyy'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Ivano-Frankivsk'
    })
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
