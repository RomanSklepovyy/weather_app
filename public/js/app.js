const weatherForm = document.querySelector('form');
const searchField = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const mainContainer = document.querySelector('.main-content');

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const location = searchField.value;

    clearResults();
    messageOne.textContent = 'Loading...';

    fetch(`/weather?address=${location}`).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                const {currently, daily} = data.forecast;

                messageOne.textContent = data.location;
                renderCurrently(currently);
                renderAllDaily(daily.data, 7);
            }
        });
    });

    searchField.value = '';
});

const renderCurrently = (data) => {
    const {summary, precipProbability, precipType = 'rain', temperature,
        apparentTemperature, windSpeed, pressure} = data;

    const HTML =
        `<div class="currently">
            <p><b>Currently</b></p>
            <p>${summary}</p>
            <p>It is ${temperature}°C, feels like ${apparentTemperature}</p>
            <p>Chance of ${precipType} ${precipProbability}%</p>
            <p>Wind speed: ${windSpeed} m/s</p>
            <p>Pressure: ${pressure} Hectopascals</p>
        </div>`;

    mainContainer.insertAdjacentHTML('beforeend', HTML);
};

const renderDaily = (data) => {
    const { summary, precipProbability, precipType = 'rain', temperatureMax, temperatureMin,
          temperatureMaxTime, temperatureMinTime, sunriseTime, sunsetTime, windSpeed,
           pressure, time} = data;

    const HTML =
        `<div class="daily">
            <p><b>${timeConverter(time, 'date')}</b></p>
            <p>${summary}</p>
            <p>Max: ${temperatureMax}°C at: ${temperatureMaxTime}</p>
            <p>Min: ${temperatureMin}°C at: ${temperatureMinTime}</p>
            <p>Chance of ${precipType} ${precipProbability}%</p>
            <p>Wind speed: ${windSpeed} m/s</p>
            <p>Pressure: ${pressure} Hectopascals</p>
            <p> Sunrise: ${timeConverter(sunriseTime, 'time')}, Sunset: ${timeConverter(sunsetTime, 'time')}</p>
        </div> `;

    mainContainer.insertAdjacentHTML('beforeend', HTML);
};

const renderAllDaily = (dataArr, days) => {
    for (let i = 0; i < days; i++) {
        renderDaily(dataArr[i]);
    }
};

const clearResults = () => {
    const current = document.querySelector('.currently');
    if (current) current.parentElement.removeChild(current);

    const daily = document.querySelectorAll('.daily');

    if (daily.length) {
        daily.forEach((el) => {
            el.parentElement.removeChild(el);
        })
    }
};

const timeConverter = (UNIX_timestamp, type) => {

    const a = new Date(UNIX_timestamp * 1000);

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();

    if (type === 'date') {
        return  date + ' ' + month + ' ' + year;
    } else if (type === 'time') {
        return hour + ':' + min + ':' + sec;
    } else {
        return  date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    }

};

