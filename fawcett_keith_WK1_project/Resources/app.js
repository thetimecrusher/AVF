Titanium.UI.setBackgroundColor('#000');

if(Ti.Network.online){
	var geo = require("geo");
	var api = require("api");
	var ui = require("ui");
	geo.getLocation();
}else{
	alert("No online connection, please check settings.");
}
