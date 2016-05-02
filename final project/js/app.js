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
		$('#zipinput').show();
		$('#temp').text('');
		$('#humidity').text('');
		$('#speed').text('');
		$('#temptxt').hide();
		$('#windtxt').hide();
		$('#humidtxt').hide();

}else if (button ==  'Submit') {




		// $('#get-weather').prepend('<button type="submit" class="retrybutton" id="button" style="visibility: inherit; opacity: 1;">Retry</button> ');


		var APIKEY = '19ab861f15cfd2e8216a3be1ed615598';
		var zipCode = $('#zip').val();		
 		$('#temptxt').show();
		$('#windtxt').show();
		$('#humidtxt').show();
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode + ',us,&units=imperial&appid=' + APIKEY,
			type: 'GET',
			success: function (response) {
				processData(response);
			$('#zipinput').hide();

			$('.submitbutton').text('Retry');
			},
			error: function (xhr) {
				console.log(xhr);
			}
		})
}else {};
	})


	function processData (data) {
		console.log(data)
		var temp = data.main.temp;
		var humidity = data.main.humidity;
		var speed = data.wind.speed;


		$('#temp').prepend(temp);
		$('#humidity').prepend(humidity);
		$('#speed').prepend(speed);

	}



})