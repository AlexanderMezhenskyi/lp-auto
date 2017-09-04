$(document).ready(function () {
	$('.center').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					centerMode: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 800,
				settings: {
					arrows: false,
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});
});


