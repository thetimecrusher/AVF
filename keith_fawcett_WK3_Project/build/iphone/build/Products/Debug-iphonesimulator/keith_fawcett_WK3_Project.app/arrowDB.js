var ui = require("ui");

var Cloud = require("ti.cloud");
Cloud.debug = true;


var authenticate = function(){
	Cloud.Users.login({
		login : "admin",
		password : "12345"
	},function(e){
		console.log(e);
			if(e.success){
			console.log("logged in");
		}else{
			alert("Data not saved");
		}		
	});
};




var save = function(data){
	Cloud.Objects.create({
		classname : "songs",
		fields: {
			title: data.title,
			playSong : data.playSong,
			artwork : data.artwork,
			user : data.user}	
	}, function(e){
		if(e.success){
			console.log("Cloud save!");
		}else{
			alert("Data not saved");
		}
		
	});
};


exports.authenticate = authenticate;
exports.save = save;
