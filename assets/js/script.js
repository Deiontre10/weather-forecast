var searchBtn = $("#searchButton");
var cityInput = $("#textInput");

$(function () {

  var currentWeather = function (list) {
    for (var result of list) {
      console.log(result.temp);
    };
    $("#currentTemperature").text("Temp" + list.temp);
    console.log(list.temp);
  };

  var weatherResults = function (weather) {
    
    var city = cityInput.val().trim();
    var apiKey = "06d1869c73d270a477b863d31ffacc7e"
    var tUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";


    fetch(tUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

        fetch(weatherUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            currentWeather(data);
          })
          .catch(function (error) {
            console.log(error);
          });
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
