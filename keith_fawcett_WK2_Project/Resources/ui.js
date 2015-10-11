var win = Ti.UI.createWindow({
	//backgroundColor: "24C7FF",
	backgroundImage: "image/cloud.jpg"
});


var format ={
	text : "...",
	color : "#fff",
	font : {fontFamily : "Arial", fontSize : 20}
};

	var name = Ti.UI.createLabel(format);
	var weather = Ti.UI.createLabel(format);
    var temp = Ti.UI.createLabel(format);
    var hi = Ti.UI.createLabel(format);
    var lo = Ti.UI.createLabel(format);
	var humidity = Ti.UI.createLabel(format);
	var wind = Ti.UI.createLabel(format);
	var time = Ti.UI.createLabel(format);
	var icon = Ti.UI.createImageView({
		width: 50,
		height: 50
	});
	
	var threeDayFormat ={
	text : "...",
	color : "#fff",
	font : {fontFamily : "Arial", fontSize : 15}
};
	var day1 = Ti.UI.createLabel(threeDayFormat);
	var hiDay1 = Ti.UI.createLabel(threeDayFormat);
	var loDay1 = Ti.UI.createLabel(threeDayFormat);
	var iconDay1 = Ti.UI.createImageView({
		width: 20,
		height: 20
	});
	
	var day2 = Ti.UI.createLabel(threeDayFormat);
	var hiDay2 = Ti.UI.createLabel(threeDayFormat);
	var loDay2 = Ti.UI.createLabel(threeDayFormat);
	var iconDay2 = Ti.UI.createImageView({
		width: 20,
		height: 20
	});
	
	var day3 = Ti.UI.createLabel(threeDayFormat);
	var hiDay3 = Ti.UI.createLabel(threeDayFormat);
	var loDay3 = Ti.UI.createLabel(threeDayFormat);
	var iconDay3 = Ti.UI.createImageView({
		width: 20,
		height: 20
	});
	


var con = Ti.UI.createView({
	top: "10%",
	height: 440,
	right: 40,
	left: 40,
	backgroundColor: "80ffffff",
	//layout: "Vertical"
});

var rangeView = Ti.UI.createView({
	width: 250,	
	height: 30,
	top: 200
	//backgroundColor:"#900"
	
});

var threeDay = Ti.UI.createView({
	height: 100,
	right: 40,
	left: 40,
	top: 230,
	//backgroundColor: "#900"
});

var day1View = Ti.UI.createView({
	height: 100,
	width: 100,
	//backgroundColor: "#090",
	left: 30
});

var day2View = Ti.UI.createView({
	height: 100,
	width: 100,
	//backgroundColor: "#090"
});

var day3View = Ti.UI.createView({
	height: 100,
	width: 100,
	//backgroundColor: "#090",
	right: 30
});


 win.add(con);

 con.add(name);
 con.add(icon);
 con.add(weather);
 con.add(temp);
 con.add(rangeView);
 con.add(humidity);
 con.add(wind);
 con.add(threeDay);
 con.add(time);

 rangeView.add(hi);
 rangeView.add(lo);
 
 threeDay.add(day1View);
 day1View.add(day1);
 day1View.add(iconDay1);
 day1View.add(hiDay1);
 day1View.add(loDay1);
 
 threeDay.add(day2View);
  day2View.add(day2);
 day2View.add(iconDay2);
 day2View.add(hiDay2);
 day2View.add(loDay2);
 threeDay.add(day3View);
 
  threeDay.add(day3View);
  day3View.add(day3);
 day3View.add(iconDay3);
 day3View.add(hiDay3);
 day3View.add(loDay3);
 
 win.open();


exports.makeUI = function(data){
	name.text = data.name;
	name.font = {fontSize : 35};
	name.top = 10;
	icon.image = data.icon;
	icon.top = 55;
	weather.text = data.weather;
	weather.font = {fontSize : 12};
	weather.top = 105;
	temp.text = Math.floor(data.tempf) + " °F";
	temp.font = {fontSize : 80};
	temp.top = 115;
	hi.text = "High " + data.hif + " °F";
	hi.left = 20;
	hi.font = {fontSize : 15};
	lo.text = "Low " + data.lof + " °F";
	lo.right = 20;
	lo.font = {fontSize : 15};
	
	day1.text = data.day1;
	day1.top = 10;
	iconDay1.image = data.iconDay1;
	iconDay1.top = 30;
	hiDay1.text = "High " + data.hifDay1 + " °F";
	hiDay1.top = 50;
	loDay1.text = "Low " + data.lofDay1 + " °F";
	loDay1.top = 70;
	
	day2.text = data.day2;
	day2.top = 10;
	iconDay2.image = data.iconDay2;
	iconDay2.top = 30;
	hiDay2.text = "High " + data.hifDay2 + " °F";
	hiDay2.top = 50;
	loDay2.text = "Low " + data.lofDay2 + " °F";
	loDay2.top = 70;
	
	day3.text = data.day3;
	day3.top = 10;
	iconDay3.image = data.iconDay3;
	iconDay3.top = 30;
	hiDay3.text = "High " + data.hifDay3 + " °F";
	hiDay3.top = 50;
	loDay3.text = "Low " + data.lofDay3 + " °F";
	loDay3.top = 70;
	
	humidity.text = "Humidity: " + data.humidity;
	humidity.bottom = 70;
	wind.text = "Wind: " + data.windDr + " " + data.windSpeed + " mph";
	wind.bottom = 35;
	time.text = data.time;
	time.bottom = 5;
	time.font = {fontSize : 12};
	
	
	var changeTemp = function(){
		if(temp.text === Math.floor(data.tempf) + " °F"){
			temp.text = Math.floor(data.tempc) + " °C";
			hi.text = "High " + data.hic + " °C";
			lo.text = "Low " + data.loc + " °C";
				hiDay1.text = "High " + data.hicDay3 + " °C";
				loDay1.text = "Low " + data.locDay3 + " °C";
				hiDay2.text = "High " + data.hicDay3 + " °C";
				loDay2.text = "Low " + data.locDay3 + " °C";
				hiDay3.text = "High " + data.hicDay3 + " °C";
				loDay3.text = "Low " + data.locDay3 + " °C";
		}else{temp.text = Math.floor(data.tempf) + " °F";
		hi.text = "High " + data.hif + " °F";
		lo.text = "Low " + data.lof + " °F";
			hiDay1.text = "High " + data.hifDay3 + " °F";
			loDay1.text = "Low " + data.lofDay3 + " °F";
			hiDay2.text = "High " + data.hifDay3 + " °F";
			loDay2.text = "Low " + data.lofDay3 + " °F";
			hiDay3.text = "High " + data.hifDay3 + " °F";
			loDay3.text = "Low " + data.lofDay3 + " °F";}
	};
temp.addEventListener("click",changeTemp);
};
