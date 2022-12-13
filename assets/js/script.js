
var lat = "35.227085";
var lon = "-80.843124";
var apiKey = "06d1869c73d270a477b863d31ffacc7e"
var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

$(function () {

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

  

});
