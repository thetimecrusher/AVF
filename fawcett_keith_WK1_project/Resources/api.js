exports.data = function(lat,lon){
var url = "http://api.wunderground.com/api/722754cc89ff297c/geolookup/conditions/q/" +lat+ "," +lon+ ".json";
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
			icon : json.current_observation.icon_url
     	};
     	ui.makeUI(jsonObj);
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