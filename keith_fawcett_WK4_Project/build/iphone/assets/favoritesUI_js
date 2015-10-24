
exports.buildFavoritesUI = function(songs){
var playWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var currentSong = 0;

var back = Ti.UI.createLabel({
	text: "Back",
	color:"#00d",
	top : "6%",
	left: "5%",
	font: {fontSize: 24, fontFamily: "Arial"}
});

var title = Ti.UI.createLabel({
	text: "Favorites",
	color: "#000",
	top : "5%",
	font: {fontSize: 34, fontFamily: "Arial"}
});

if(songs[currentSong].artwork == null){
	var artwork = Ti.UI.createImageView({
	image: "image/missing.png",
	width: "30%",
	top: "25%"
	});
}else{
var artwork = Ti.UI.createImageView({
	image: songs[currentSong].artwork,
	width: "30%",
	top: "25%"
});}

var userName = Ti.UI.createLabel({
	text: songs[currentSong].user.toUpperCase(),
	top: "55%",
	color: "#000",
	font: {fontSize: 18, fontFamily: "Arial"}
});

var songName = Ti.UI.createLabel({
	text: songs[currentSong].title,
	top: "60%",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Arial"},
	textAlign: "center"
});

var previous = Ti.UI.createImageView({
	top: "80%",
	height: 100,
	left: "25%",
	image: "image/back.png"
});
var play = Ti.UI.createImageView({
	top: "80%",
	height: 100,
	image: "image/play.png"
});
var next = Ti.UI.createImageView({
	top: "80%",
	height: 100,
	right: "25%",
	image: "image/next.png"
});



back.addEventListener("click", function(){
	player.stop();
	playWindow.close({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
	
});



var player =Ti.Media.createAudioPlayer();

previous.addEventListener("click", function(e){
	if(currentSong === 0){
		currentSong = songs.length-1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user.toUpperCase();
		if(songs[currentSong].artwork == null){
			artwork.image = "image/missing.png";
		}else{
		artwork.image = songs[currentSong].artwork;}
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}else{
		currentSong = currentSong -1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user.toUpperCase();
		if(songs[currentSong].artwork == null){
			artwork.image = "image/missing.png";
		}else{
		artwork.image = songs[currentSong].artwork;}
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
		userName.text = songs[currentSong].user.toUpperCase();
		if(songs[currentSong].artwork == null){
			artwork.image = "image/missing.png";
		}else{
		artwork.image = songs[currentSong].artwork;}
		if(play.image == "image/pause.png"){
			player.stop();
			player.url = songs[currentSong].playSong;
			player.start();
		}else{
		player.url = songs[currentSong].playSong;}
		}else{
		currentSong = currentSong +1;
		songName.text = songs[currentSong].title;
		userName.text = songs[currentSong].user.toUpperCase();
		if(songs[currentSong].artwork == null){
			artwork.image = "image/missing.png";
		}else{
		artwork.image = songs[currentSong].artwork;}
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
playWindow.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};