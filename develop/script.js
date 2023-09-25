
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

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/icons/${iconCode}.svg`;
    $('#weatherIcon').attr('class', `fas fa-${iconCode}`);
}
});
