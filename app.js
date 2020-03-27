const request = require('request');

const url = 'https://api.darksky.net/forecast/2f067ec8fbe228f0f63e90066b5715e0/37.8267,-122.4233?units=si&lang=uk';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently);
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9tYW5za2xlcG92eXkiLCJhIjoiY2s4YWF1azR1MDBkcTNobHZuOWY0eTI4NSJ9.zK9ut6YQFAKXqqfvrUtdDA&limit=1';
request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, ', ', longitude);
});