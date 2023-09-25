
$(document).ready(function () {
  $('#searchButton').click(function () {
      const city = $('#cityInput').val();
      getWeather(city);
  });

 