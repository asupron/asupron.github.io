// site will give a background color pallete depending on current area's weather
// user enters zip code
// zip code retrieves temperature, humidity, and wind speed from weather API
// three values determine 3 color stops for the backgrounds gradient, giving each city a color pallete that that time
// icons change for each variable given the current value (temp is 68< degrees=sun w/clouds icon, temp is >23 degrees= ice icon)

$(document).ready(function () {

	$('#get-weather').submit(function (event) {
		event.preventDefault();

		var button	= $('.submitbutton').text();

		if (button == 'Retry') {
			$('.weather').hide();
			$('#zipinput').val('').show();
			$('#temp-val').text('');
			$('#humid-val').text('');
			$('#speed-val').text('');
			$('.submitbutton').text("Submit");

		} else if (button ==  'Submit') {

			// $('#get-weather').prepend('<button type="submit" class="retrybutton" id="button" style="visibility: inherit; opacity: 1;">Retry</button> ');


			var APIKEY = 'f2b2ecf00895f5ca54fb895e13b431bf';
			var zipCode = $('#zipinput').val();		
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode + ',us,&units=imperial&appid=' + APIKEY,
				type: 'GET',
				success: function (response) {
					processData(response);
					console.log(response);
					$('#zipinput').hide();
					$('.weather').show();
					$('.submitbutton').text('Retry');
					$('#container').css('background', set_background_gradient_color(get_temp_color(response.main.temp),get_humid_color(response.main.humidity),get_wind_color(response.wind.speed)));

				},

				error: function (xhr) {
					console.log(xhr);
				}
			})

		} else {};

	})

	

	function processData (data) {
		console.log(data)
		var city = data.name;
		var temp = data.main.temp;
		var humidity = data.main.humidity;
		var speed = data.wind.speed;

		$('#city-val').text(city);
		$('#temp-val').text(temp);
		$('#humid-val').text(humidity);
		$('#speed-val').text(speed);
	}


var get_temp_color = function(temp){
	if(4 > temp && temp > 1) {
		return "#172A63"
	}else if (9 > temp && temp > 5){
		return "#2E3E6E"
	}else if (14 > temp && temp > 9){
		return "#566A85"
	}else if (20 > temp && temp > 14){
		return "#647B9C"
	}else if (24 > temp && temp > 20){
		return "#466A9C"
	}else if (29 > temp && temp > 24){
		return "#2445C9"
	}else if (34 > temp && temp > 29){
		return "#2464C9"
	}else if (37 > temp && temp > 34){
		return "#457ED9"
	}else if (40 > temp && temp > 37){
		return "#ABC5DB"
	}else if (43 > temp && temp > 40){
		return "#92C8F7"
	}else if (46 > temp && temp > 43){
		return "#6DB1ED"
	}else if (49 > temp && temp > 46){
		return "#6DD1ED"
	}else if (52 > temp && temp > 49){
		return "#70BACF"
	}else if (55 > temp && temp > 52){
		return "#97CCC7"
	}else if (58 > temp && temp > 55){
		return "#91C79F"
	}else if (61 > temp && temp > 58){
		return "#A7D97E"
	}else if (64 > temp && temp > 61){
		return "#C1E06C"
	}else if (67 > temp && temp > 64){
		return "#F5E78C"
	}else if (70 > temp && temp > 67){
		return "#F5D38C"
	}else if (73 > temp && temp > 70){
		return "#FFBB29"
	}else if (76 > temp && temp > 73){
		return "#FF6929"
	}else if (79 > temp && temp > 76){
		return "#FF3729"
	}else if (82 > temp && temp > 79){
		return "#FF174D"
	}else if (85 > temp && temp > 82){
		return "#FF219F"
	}else if (88 > temp && temp > 85){
		return "#F20099"
	}else if (91 > temp && temp > 88){
		return "#D90089"
	}else if (94 > temp && temp > 91){
		return "#FF3D3D"
	}else if (100 > temp && temp > 94){
		return "#FF1E00"
	}else {
		return "#F0C7C7"
	}
};
var get_humid_color = function(humidity){
	console.log('humidity ', humidity)
	if(4 > humidity && humidity > 1) {
		return "#78C8E3"
	}else if (9 > humidity && humidity > 5){
		return "#BF28FF"
	}else if (14 > humidity && humidity > 9){
		return "#8ABEE3"
	}else if (19 > humidity && humidity > 14){
		return "#71D8E3"
	}else if (24 > humidity && humidity > 19){
		return "#008080"
	}else if (29 > humidity && humidity > 24){
		return "#00E3E3"
	}else if (34 > humidity && humidity > 29){
		return "#0993E8"
	}else if (39 > humidity && humidity > 34){
		return "#0993E8"
	}else if (44 > humidity && humidity > 39){
		return "#0993E8"
	}else if (49 > humidity && humidity > 44){
		return "#22E4F2"
	}else if (52 > humidity && humidity > 49){
		return "#7DF6FF"
	}else if (55 > humidity && humidity > 52){
		return "#7DFFE7"
	}else if (57 > humidity && humidity > 55){
		return "#78D6C5"
	}else if (61 > humidity && humidity > 57){
		return "#27AB93"
	}else if (64 > humidity && humidity > 61){
		return "#6EBA94"
	}else if (67 > humidity && humidity > 64){
		return "#8BE0B6"
	}else if (70 > humidity && humidity > 67){
		return "#67D69F"
	}else if (73 > humidity && humidity > 70){
		return "#3FEB95"
	}else if (76 > humidity && humidity > 73){
		return "#86E3D3"
	}else if (79 > humidity && humidity > 76){
		return "#67CFBD"
	}else if (82 > humidity && humidity > 79){
		return "#06BFA0"
	}else if (85 > humidity && humidity > 82){
		return "#2EC9B0"
	}else if (88 > humidity && humidity > 85){
		return "#2EC2C9"
	}else if (91 > humidity && humidity > 88){
		return "#07CED9"
	}else if (94 > humidity && humidity > 91){
		return "#21E1EB"
	}else if (97 > humidity && humidity > 94){
		return "#57D2F7"
	}else if (100 > humidity && humidity > 97){
		return "#0CBFF5"
	}else {
		return "#abd6d9"
	}
};

var get_wind_color = function(speed) {

	if(2 > speed && speed > 1) {
		return "#F2FF7D" 
	}else if (3 > speed && speed > 2){
		return "#C2FF59"
	}else if (4 > speed && speed > 3){
		return "#BFFF1F"
	}else if (5 > speed && speed > 4){
		return "#A5E00D"
	}else if (6 > speed && speed > 5){
		return "#8ABD0B"
	}else if (7 > speed && speed > 6){
		return "#849E00"
	}else if (8 > speed && speed > 7){
		return "#758C00"
	}else if (9 > speed && speed > 8){
		return "#758C00"
	}else if (10 > speed && speed > 9){
		return "#D085FF"
	}else if (11 > speed && speed > 10){
		return "#9F36E0"
	}else if (12 > speed && speed > 11){
		return "#C961C6"
	}else if (13 > speed && speed > 12){
		return "#960F92"
	}else if (14 > speed && speed > 13){
		return "#73006F"
	}else if (15 > speed && speed > 14){
		return "#9100C2"
	}else if (16 > speed && speed > 15){
		return "#B67DC9"
	}else {
		return "#bfeb8a"
	}
};



// We now can use the stored color values to change the background.
// Invoked by using "background_gradient(get_temp_color(arg), get_humid_color(arg),
// get_wind_color(arg));" as seen in line 38.
var set_background_gradient_color = function (temp, humidity, speed) {
		return "linear-gradient(90deg," + temp + "," + humidity + "," + speed + ")"
}
// background_gradient_colors(arg1, arg2, arg3); can be passed the values returned from the API 
// after it is passed through out get_ functions
// This line is to be used to change the background.




})