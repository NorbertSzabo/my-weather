'use strict';

function getWeather(data) {
    if (data && data.weather && data.weather.length > 0) {
        return data.weather[0].main;
    }
    return "";
}

function getWeatherDescription(data) {
    if (data && data.weather && data.weather.length > 0) {
        return data.weather[0].description;
    }
    return "";
}