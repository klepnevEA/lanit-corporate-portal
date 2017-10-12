$(document).ready(function() {

	//открытие/зактытие пунктов в боковом меню
	var openMenu = function(e) {
		e.preventDefault();
		var thisEl = $(this),
			parentEl = thisEl.closest('.header__menu-elem-main');

			parentEl.toggleClass('active');
	}

	$('.header__menu-link-main').on('click', openMenu);

	// сворачивание бокового меню

	var curtailMenu =  function(e) {
		e.preventDefault();
		$('.header__menu').toggleClass('curtail');
		$('.header__menu-elem-main').removeClass('active');
	}

	$('.header__turn').on('click', curtailMenu);


	$(window).on('resize', function() {
		var windowWidth = window.innerWidth;
		if(windowWidth <= 1620) {
			$('.header__menu').addClass('curtail');
		} else if (windowWidth > 1620) {
			$('.header__menu').removeClass('curtail');
		}
		
	});


	// табы

	var tabOpen = function(e) {
		e.preventDefault();
		var thisEl = $(this),
		dataVal = thisEl.data('food');
		$('.food__tab').removeClass('active');
		thisEl.addClass('active');
		console.log(dataVal);

		$('.food__blok').removeClass('active');
		$('#' + dataVal).addClass('active');
	}

	$('.food__tab').on('click', tabOpen);

}); 


