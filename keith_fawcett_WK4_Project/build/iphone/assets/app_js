Titanium.UI.setBackgroundColor('#fff');

if(Ti.Network.online){
	var ui = require("ui");
	var arrowDB = require("arrowDB");
	arrowDB.authenticate();
}else{
	alert("No online connection, please check settings, only favorites are avalable.");
	var sql = require("sql");
	sql.lsData();
}
