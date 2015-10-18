var favorites = require("favoritesUI");

	exports.anyData = false;
	
var lsData = function(e){
	var db = Ti.Database.open('favorite');
	var dbRows = db.execute('SELECT title, playSong, artwork, user FROM favoriteData');
	var songArray = [];
	var object = {};
	while(dbRows.isValidRow()){
		songArray.push(object = {
			
			title: dbRows.fieldByName ("title"),
			playSong: dbRows.fieldByName("playSong"),
			artwork: dbRows.fieldByName ("artwork"),
			user: dbRows.fieldByName("user")
		});
		dbRows.next();
	};
	
	favorites.buildFavoritesUI(songArray);
	
	dbRows.close();
	db.close();
	//console.log("Title " + rowData.title);
};

	




exports.saveData = function(data){
var db = Ti.Database.open('favorite');
db.execute("CREATE TABLE IF NOT EXISTS favoriteData (id INTEGER PRIMARY KEY, title TEXT, playSong TEXT, artwork TEXT, user TEXT)");
db.execute("INSERT INTO favoriteData (title, playSong, artwork, user) VALUES(?,?,?,?)",data.title, data.playSong, data.artwork, data.user);
//console.log(db);

db.close();
//lsData();
};

exports.lsData = lsData;