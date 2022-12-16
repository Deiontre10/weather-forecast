var searchBtn = $("#searchButton");
var cityInput = $("#textInput");
var currentDate = dayjs().format("MM/DD/YYYY");


$(function () {

  // var currentWeather = function (list) {
  //   for (var result of Object.entries(list)) {
  //     console.log(result.main.temp);
  //   };
  //   $("#currentTemperature").text("Temp" + result.temp);
  //   console.log(result.temp);
  // };

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
        var weatherIcon = "http://openweathermap.org/img/w/"  + data.weather[0].icon + ".png";
        
        $("#currentCity").text(data.name).append(" " + currentDate + " " + "<img src='" + weatherIcon  + "'>");
        $("#currentTemp").text("Temp:" + " " + data.main.temp + " °F");
        $("#currentWind").text("Wind: " + " " + data.wind.speed + " MPH");
        $("#currentHumidity").text("Humidity: " + " " + data.main.humidity + " %");

        fetch(weatherUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (weather) {
            console.log(weather.list);
            // $("#currentTemp").text("Temp:" + " " + weather.list[0].main.temp + " °F");
            // $("#currentWind").text("Wind: " + " " + weather.list[0].wind.speed + " MPH");
            // $("#currentHumidity").text("Humidity: " + " " + weather.list[0].main.humidity + " %");

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
    // $("#todaysDate").text(currentDate);

  });
});
