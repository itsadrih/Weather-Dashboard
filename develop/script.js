
$(document).ready(function () {
  $('#searchButton').click(function () {
      const city = $('#cityInput').val();
      getWeather(city);
  });

  function getWeather(city) {
    const apiKey = '9e3433936b6e90baa334345a1d72419a'; 
    
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    
    $.get(apiUrl, function (data) {
        displayWeather(data);
    });
}

function displayWeather(data) {
    $('#cityName').text(data.name);
    $('#temperature').text(`${data.main.temp}°F`);
    $('#weatherDescription').text(data.weather[0].description);
