var api = require("api");
var getLocation = function(){
	
	// if(Ti.Platform.osname === "android"){
		// var lat = 37.33233;
		// var lon = -122.03121;
		// api.data(lat,lon);
// 		
	// }else{
	
	
		Ti.Geolocation.purpose = "your location is needed to get your lattitude and longitude for your current location";
		Ti.Geolocation.getCurrentPosition(function(e){
			if(e.error){
			alert("can not get current location, please check settings.");
		}
		
		var lat = e.coords.latitude;
		var lon = e.coords.longitude;
		api.data(lat,lon);
	
		});

};
//};

exports.getLocation = (getLocation);