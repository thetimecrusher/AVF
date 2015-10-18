
exports.buildFavoritesUI = function(songs){
var playWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var currentSong = 0;

var back = Ti.UI.createLabel({
	text: "Back",
	color:"#000",
	top : "5%",
	left: "5%",
	font: {fontSize: 24, fontFamily: "Arial"}
});

var title = Ti.UI.createLabel({
	text: "Favorites",
	color: "#000",
	top : "5%",
	font: {fontSize: 30, fontFamily: "Arial"}
});

var artwork = Ti.UI.createImageView({
	image: songs[currentSong].artwork,
	width: "20%",
	top: "20%"
});

var userName = Ti.UI.createLabel({
	text: songs[currentSong].user,
	top: "40%",
	color: "#000",
	font: {fontSize: 20, fontFamily: "Arial"}
});

var songName = Ti.UI.createLabel({
	text: songs[currentSong].title,
	top: "45%",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Arial"},
	textAlign: "center"
});

var previous = Ti.UI.createImageView({
	top: "65%",
	height: 100,
	left: "25%",
	image: "image/back.png"
});
var play = Ti.UI.createImageView({
	top: "65%",
	height: 100,
	image: "image/play.png"
});
var next = Ti.UI.createImageView({
	top: "65%",
	height: 100,
	right: "25%",
	image: "image/next.png"
});



back.addEventListener("click", function(){
	player.stop();
	playWindow.close();
	
});



var player =Ti.Media.createAudioPlayer();

previous.addEventListener("click", function(e){
	if(currentSong === 0){
		currentSong = songs.length-1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user;
		artwork.image = songs[currentSong].artwork;
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}else{
		currentSong = currentSong -1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user;
		artwork.image = songs[currentSong].artwork;
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}
});

play.addEventListener("click", function(){
	if(play.image == "image/play.png")
	{play.image = "image/pause.png";
	console.log(songs[currentSong].playSong);
	player.url = songs[currentSong].playSong;
	player.start();
	}else{
		play.image = "image/play.png";
		player.stop();
	}
});

//console.log(songs.length);

next.addEventListener("click", function(e){
	if(currentSong === songs.length-1){
		currentSong = 0;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user;
		artwork.image = songs[currentSong].artwork;
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}else{
		currentSong = currentSong +1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user;
		artwork.image = songs[currentSong].artwork;
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}
});

if(Ti.Network.online){
playWindow.add(back);
}
playWindow.add(title);
playWindow.add(artwork);
playWindow.add(userName);
playWindow.add(songName);
playWindow.add(previous);
playWindow.add(play);
playWindow.add(next);
playWindow.open();
};