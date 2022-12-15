var searchBtn = $("#searchButton");
var cityInput = $("#textInput");

$(function () {

  var weatherResults = function (lat, lon) {
    // var lat = weather.coord.lat;
    // var lon = weather.coord.lon;
    var city = cityInput.val().trim();
    var apiKey = "06d1869c73d270a477b863d31ffacc7e"
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";
    var tUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey + "&units=imperial";
    
    fetch(tUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  

  searchBtn.on("click", function (event) {
    event.preventDefault();
    var input = cityInput.val().trim();
    if (input === "") {
      return;
    } else {
      weatherResults(input);
    }

    console.log("search");
  });
});
