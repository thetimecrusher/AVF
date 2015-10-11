var sql = require("sql");
exports.data = function(lat,lon){
var url = "http://api.wunderground.com/api/722754cc89ff297c/conditions/forecast10day/q/" +lat+ "," +lon+ ".json";
 var client = Ti.Network.createHTTPClient({
     onload : function(e) {
     	var json = JSON.parse(this.responseText);
     	console.log(json);
     	var jsonObj={
     		name : json.current_observation.display_location.full,
     		weather : json.current_observation.weather,
     		tempf : json.current_observation.temp_f,
			tempc : json.current_observation.temp_c,
			humidity : json.current_observation.relative_humidity,
			windSpeed : json.current_observation.wind_mph,
			windDr : json.current_observation.wind_dir,
			icon : json.current_observation.icon_url,
			time : json.current_observation.observation_time,
			hif : json.forecast.simpleforecast.forecastday[0].high.fahrenheit,
			hic : json.forecast.simpleforecast.forecastday[0].high.celsius,
			lof : json.forecast.simpleforecast.forecastday[0].low.fahrenheit,
			loc : json.forecast.simpleforecast.forecastday[0].low.celsius,
			day1 : json.forecast.simpleforecast.forecastday[1].date.weekday,
			iconDay1 : json.forecast.simpleforecast.forecastday[1].icon_url,
			hifDay1 : json.forecast.simpleforecast.forecastday[1].high.fahrenheit,
			hicDay1 : json.forecast.simpleforecast.forecastday[1].high.celsius,
			lofDay1 : json.forecast.simpleforecast.forecastday[1].low.fahrenheit,
			locDay1 : json.forecast.simpleforecast.forecastday[1].low.celsius,
			day2 : json.forecast.simpleforecast.forecastday[2].date.weekday,
			iconDay2 : json.forecast.simpleforecast.forecastday[2].icon_url,
			hifDay2 : json.forecast.simpleforecast.forecastday[2].high.fahrenheit,
			hicDay2 : json.forecast.simpleforecast.forecastday[2].high.celsius,
			lofDay2 : json.forecast.simpleforecast.forecastday[2].low.fahrenheit,
			locDay2 : json.forecast.simpleforecast.forecastday[2].low.celsius,
			day3 : json.forecast.simpleforecast.forecastday[3].date.weekday,
			iconDay3 : json.forecast.simpleforecast.forecastday[3].icon_url,
			hifDay3 : json.forecast.simpleforecast.forecastday[3].high.fahrenheit,
			hicDay3 : json.forecast.simpleforecast.forecastday[3].high.celsius,
			lofDay3 : json.forecast.simpleforecast.forecastday[3].low.fahrenheit,
			locDay3 : json.forecast.simpleforecast.forecastday[3].low.celsius
     	};
     	sql.saveData(jsonObj);
     },
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000
 });
 client.open("GET", url);
 client.send();
};