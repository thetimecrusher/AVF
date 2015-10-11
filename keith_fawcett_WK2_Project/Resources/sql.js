

var lsData = function(e){
	var db = Ti.Database.open('weatherDB');
	var dbRows = db.execute('SELECT name, weather, tempf, tempc, humidity, windSpeed, windDr, icon, time, hif, hic, lof, loc, day1, iconDay1, hifDay1, hicDay1, lofDay1, locDay1, day2, iconDay2, hifDay2, hicDay2, lofDay2, locDay2, day3, iconDay3, hifDay3, hicDay3, lofDay3, locDay3 FROM weatherData');
	var rows = dbRows.rows;
	while(dbRows.isValidRow()){
		var rowData = {
			name: dbRows.fieldByName ("name"),
			weather: dbRows.fieldByName("weather"),
			tempf: dbRows.fieldByName("tempf"),
			tempc: dbRows.fieldByName("tempc"),
			humidity: dbRows.fieldByName("humidity"),
			windSpeed: dbRows.fieldByName("windSpeed"),
			windDr: dbRows.fieldByName("windDr"),
			icon: dbRows.fieldByName("icon"),
			time: dbRows.fieldByName("time"),
			hif: dbRows.fieldByName("hif"),
			hic: dbRows.fieldByName("hic"),
			lof: dbRows.fieldByName("lof"),
			loc: dbRows.fieldByName("loc"),
			day1: dbRows.fieldByName("day1"),
			iconDay1: dbRows.fieldByName("iconDay1"),
			hifDay1: dbRows.fieldByName("hifDay1"),
			hicDay1: dbRows.fieldByName("hicDay1"),
			lofDay1: dbRows.fieldByName("lofDay1"),
			locDay1: dbRows.fieldByName("locDay1"),
			day2: dbRows.fieldByName("day2"),
			iconDay2: dbRows.fieldByName("iconDay2"),
			hifDay2: dbRows.fieldByName("hifDay2"),
			hicDay2: dbRows.fieldByName("hicDay2"),
			lofDay2: dbRows.fieldByName("lofDay2"),
			locDay2: dbRows.fieldByName("locDay2"),
			day3: dbRows.fieldByName("day3"),
			iconDay3: dbRows.fieldByName("iconDay3"),
			hifDay3: dbRows.fieldByName("hifDay3"),
			hicDay3: dbRows.fieldByName("hicDay3"),
			lofDay3: dbRows.fieldByName("lofDay3"),
			locDay3: dbRows.fieldByName("locDay3")
		};
		dbRows.next();
	};
	dbRows.close();
	db.close();
	console.log("My Database Rows" + rows);
	var ui = require("ui");
	ui.makeUI(rowData);
};




exports.saveData = function(data){
var db = Ti.Database.open('weatherDB');
db.execute("CREATE TABLE IF NOT EXISTS weatherData (id INTEGER PRIMARY KEY, name TEXT, weather TEXT, tempf INT, tempc INT, humidity INT, windSpeed INT, windDr TEXT, icon TEXT, time TEXT, hif INT, hic INT, lof INT, loc INT, day1 TEXT, iconDay1 TEXT, hifDay1 INT, hicDay1 INT, lofDay1 INT,locDay1 INT, day2 TEXT, iconDay2 TEXT, hifDay2 INT, hicDay2 INT, lofDay2 INT,locDay2 INT, day3 TEXT, iconDay3 TEXT, hifDay3 INT, hicDay3 INT, lofDay3 INT,locDay3 INT)");
db.execute("DELETE FROM weatherData");
db.execute("INSERT INTO weatherData (name, weather, tempf, tempc, humidity, windSpeed, windDr, icon, time, hif, hic, lof, loc, day1, iconDay1, hifDay1, hicDay1, lofDay1, locDay1, day2, iconDay2, hifDay2, hicDay2, lofDay2, locDay2, day3, iconDay3, hifDay3, hicDay3, lofDay3, locDay3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",data.name, data.weather, data.tempf, data.tempc, data.humidity, data.windSpeed, data.windDr, data.icon, data.time, data.hif, data.hic, data.lof, data.loc, data.day1, data.iconDay1, data.hifDay1, data.hicDay1, data.lofDay1, data.locDay1, data.day2, data.iconDay2, data.hifDay2, data.hicDay2, data.lofDay2, data.locDay2, data.day3, data.iconDay3, data.hifDay3, data.hicDay3, data.lofDay3, data.locDay3);
console.log("Row Item");
db.close();
lsData();
};

exports.lsData = lsData;