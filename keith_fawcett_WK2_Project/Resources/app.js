Titanium.UI.setBackgroundColor('#000');

if(Ti.Network.online){
	var geo = require("geo");
	geo.getLocation();
}else{
	alert("No online connection, loaded last saved data, please check settings.");
	var sql = require("sql");
	sql.lsData();
}
