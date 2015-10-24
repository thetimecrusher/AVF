var api = require("api");
var sql = require("sql");

var win = Ti.UI.createWindow({
	
});

var genre = Ti.UI.createLabel({
	text: "Genres",
	top : "5%",
	left: "6%",
	font: {fontSize: 30, fontFamily: "Arial"},
	color: "#000"
});

var logo = Ti.UI.createImageView({
	image : "image/logo.png",
	top: "17",
	height: "8%"
});

var favorites = Ti.UI.createLabel({
	text: "My Favorites",
	top : "5%",
	right: "5%",
	font: {fontSize: 30, fontFamily: "Arial"},
	color: "#00d"
});

if(Ti.Platform.osname === "android"){
	genre.color = "#fff";
	favorites.color = "#55f";
}

favorites.addEventListener("click",function(){
	if(sql.anyData == true){
		sql.lsData();
	}else{
		alert("Favorites are empty, please add some songs");
	}
	//sql.lsData();
	console.log("favorites clicked");
});


var genres = [
{title: "Ambient", hasChild: true},
{title: "Classical", hasChild: true},
{title: "Country", hasChild: true},
{title: "Dance & EDM", hasChild: true},
{title: "Dancehall", hasChild: true},
{title: "Deep House", hasChild: true},
{title: "Disco", hasChild: true},
{title: "Drum & Bass", hasChild: true},
{title: "Dubstep", hasChild: true},
{title: "Electronic", hasChild: true},
{title: "Folk & Singer-Songwriter", hasChild: true},
{title: "Hip Hop & Rap", hasChild: true},
{title: "House", hasChild: true},
{title: "Indie", hasChild: true},
{title: "Jazz & Blues", hasChild: true},
{title: "Latin", hasChild: true},
{title: "Metal", hasChild: true},
{title: "Piano", hasChild: true},
{title: "Pop", hasChild: true},
{title: "R&B & Soul", hasChild: true},
{title: "Reggae", hasChild: true},
{title: "Reggaeton", hasChild: true},
{title: "Rock", hasChild: true},
{title: "Soundtrack", hasChild: true},
{title: "Techno", hasChild: true},
{title: "Trance", hasChild: true},
{title: "Trap", hasChild: true},
{title: "Trip Hop", hasChild: true},
{title: "World", hasChild: true}
];

var genreTable = Ti.UI.createTableView({
	data: genres,
	top: "10%"

});


genreTable.addEventListener("click", function(e){
	console.log(e.rowData.title);
	api.getSong(e.rowData.title);
	//console.log(api.songArray);
	//buildPlayUI(api.songArray);
});

win.add(genre);
win.add(logo);
win.add(favorites);
win.add(genreTable);
win.open();
