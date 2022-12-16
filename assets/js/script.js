var searchBtn = $("#searchButton");
var cityInput = $("#textInput");
var currentDate = dayjs().format("YYYY-MM-DD");



$(function () {

  var weatherResults = function () {

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
        var weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


        $("#currentCity").text(data.name).append(" " + currentDate + " " + "<img src='" + weatherIcon + "'>");
        $("#currentTemp").text("Temp:" + " " + data.main.temp + " °F");
        $("#currentWind").text("Wind: " + " " + data.wind.speed + " MPH");
        $("#currentHumidity").text("Humidity: " + " " + data.main.humidity + " %");

        fetch(weatherUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (weather) {
            console.log(weather.list);
            for (var i = 0; i < weather.list.length; i += 8) {
              var fiveDayIconEl = "http://openweathermap.org/img/w/" + weather.list[i].weather[0].icon + ".png"
              var listPosition = (i + 8) / 8;

              $("#fiveDayIcon" + listPosition).text(weather.list[i].name).append(" " + weather.list[i].dt_txt.slice(0, 10) + " " + "<img src='" + fiveDayIconEl + "'>");
              $("#fiveDayTemp" + listPosition).text("Temp:" + " " + weather.list[i].main.temp + " °F");
              $("#fiveDayWind" + listPosition).text("Wind: " + " " + weather.list[i].wind.speed + " MPH");
              $("#fiveDayHumidity" + listPosition).text("Humidity: " + " " + weather.list[i].main.humidity + " %");
              $(".fiveDay").attr("style", "background-color:blueviolet; color:white");
            }
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

    var searchedCities = [];

    searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
    searchedCities.push(input);
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));

  });
});
