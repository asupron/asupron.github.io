$(document).ready(function () {

	$(window).scroll(function () {
		
		var scrollTop = $(window).scrollTop()

		if (scrollTop > 100) {
			$('header').css('background', 'red')
		} else {
			$('header').css('background', 'blue')
		}

	})

})
