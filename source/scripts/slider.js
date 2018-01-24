// слайдер
$(function(){
	//слайдер для виджета - приятного аппетита
	$(".food__tabs").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		// variableWidth: true,
			
	});

	//слайдер отзывов
	$(".slider-concur").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,		
	});

	$(".ml-photo-modal__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: false,		
	});
	$(".ml-photo-modal-contests__gallery-box").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: false,		
	});


	$(".slider-services").slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,

		responsive: [
			{
			breakpoint: 1201,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
			breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
			breakpoint: 376,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
			
		]
	});

	$(".slider-news").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
	});

	$(".birthdays__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
	});


})