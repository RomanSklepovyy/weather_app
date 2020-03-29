const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +
        '.json?access_token=pk.eyJ1Ijoicm9tYW5za2xlcG92eXkiLCJhIjoiY2s4YWF1azR1MDBkcTNobHZuOWY0eTI4NSJ9.zK9ut6YQFAKXqqfvrUtdDA&limit=1'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable connect to location service!', undefined);
        }
        else if (body.features.length === 0) {
            callback('Unable to find location!', undefined);
        }
        else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name;

            callback(undefined, {latitude, longitude, location});
        }
    });
};

module.exports = geocode;
