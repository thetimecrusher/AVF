var playUI = require("playUI");

exports.getSong = function(genre){
	var url = "https://api.soundcloud.com/tracks.json?&client_id=4b29088ec2e7d05566a890ba60f1f292&genres=" + genre;
	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
		var songArray = [];
     	var json = JSON.parse(this.responseText);
     	for(i=0, j=json.length; i<j; i++){
     	//console.log(json);
     	var jsonObj={
     		length: songArray.length,
     		genre : json[i].genre,
     		title : json[i].title,
     		playSong : json[i].stream_url + "?&client_id=4b29088ec2e7d05566a890ba60f1f292",
     		artwork : json[i].artwork_url,
     		user : json[i].user.username,
     		streamable : json[i].streamable
		
	};
		if(jsonObj.streamable == true ){
			songArray.push(jsonObj);
		}
		//return = songArray;
     }
     playUI.buildPlayUI(songArray);
     //console.log(songArray);
      
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


