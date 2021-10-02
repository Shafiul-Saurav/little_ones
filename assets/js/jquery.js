$(document).ready(function () {

	/* STICKY MENU */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky__menu');
		} else {
			$("header").removeClass('sticky__menu');
		}
	});


	/* SHOW & HIDE MENU */
	$(".menu__show__icon").click(function () {
		$(".main__menu").toggleClass("main__menu-show");
	});

});
