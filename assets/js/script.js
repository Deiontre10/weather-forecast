var searchBtn = $("#searchButton");
var cityInput = $("#textInput");

$(function () {

  var currentWeather = function (main) {
    // for (var result of main) {
    //   console.log(result.main.temp);
    // };
  };

  var weatherResults = function (weather) {
    // var lat = .coord.lat;
    // var lon = .coord.lon;
    var city = cityInput.val().trim();
    var apiKey = "06d1869c73d270a477b863d31ffacc7e"
    // var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";
    var tUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey + "&units=imperial";
    
    fetch(tUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      currentWeather(data.main);
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
    var currentDate = dayjs().format("MM/DD/YYYY");
    $("#todaysDate").text(currentDate);
    
  });
});
