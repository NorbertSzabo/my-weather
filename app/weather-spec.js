
QUnit.module('weatherParser', function() {

    QUnit.test('get weather short', function(assert) {

        assert.deepEqual( getWeather(mock_weather), "Clouds");

    });

    QUnit.test('get weather description', function(assert) {

        assert.deepEqual( getWeatherDescription(mock_weather), "broken clouds");

    });

});