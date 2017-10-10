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
}); 


