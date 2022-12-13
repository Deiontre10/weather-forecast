// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var lat;
var lon;
var weatherUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={06d1869c73d270a477b863d31ffacc7e}";

$(function (){
    
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
