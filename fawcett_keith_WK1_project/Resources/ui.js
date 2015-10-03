var win = Ti.UI.createWindow({
	backgroundColor: "24C7FF",
	
});


var format ={
	text : "...",
	color : "#fff",
	font : {fontFamily : "Arial", fontSize : 20}
};

	var name = Ti.UI.createLabel(format);
	var weather = Ti.UI.createLabel(format);
    var temp = Ti.UI.createLabel(format);
	var humidity = Ti.UI.createLabel(format);
	var wind = Ti.UI.createLabel(format);
	var icon = Ti.UI.createImageView({
		left : 10
	});

var con = Ti.UI.createView({
	top: "25%",
	height: 300,
	right: 40,
	left: 40,
	backgroundColor: "80ffffff",
});

var iconView = Ti.UI.createView({
	width: 200,	
	height: 50,
	top: 40
});

 win.add(con);
 con.add(name);
 con.add(temp);
 con.add(humidity);
 con.add(wind);
 con.add(iconView);
 iconView.add(icon);
 iconView.add(weather);
 win.open();


exports.makeUI = function(data){
	name.text = data.name;
	name.top = 10;
	weather.text = data.weather;
	temp.text = Math.floor(data.tempf) + " °F";
	temp.font = {fontSize : 80};
	temp.top = 100;
	humidity.text = "Humidity: " + data.humidity;
	humidity.bottom = 50;
	wind.text = "Wind: " + data.windDr + " " + data.windSpeed + " mph";
	wind.bottom = 15;
	icon.image = data.icon;
	
	var changeTemp = function(){
		if(temp.text == Math.floor(data.tempf) + " °F"){
			temp.text = Math.floor(data.tempc) + " °C";
		}else{temp.text = Math.floor(data.tempf) + " °F";}
	};
temp.addEventListener("click",changeTemp);
};
