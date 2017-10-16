$(document).ready(function() {

var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);
Stickyfill.refreshAll();

	//открытие/зактытие пунктов в боковом меню
	var openMenu = function(e) {
		e.preventDefault();
		var thisEl = $(this),
			parentEl = thisEl.closest('.nav-menu__menu-elem-main');

			parentEl.toggleClass('active');
	}

	$('.nav-menu__menu-link-main').on('click', openMenu);

	// сворачивание бокового меню

	var curtailMenu =  function(e) {
		e.preventDefault();
		$('.container-wrap').toggleClass('curtail');
		$('.slider-concur').slick('refresh');
		$(".slider-services").slick('refresh');
		$(".slider-news").slick('refresh');
		$(".birthdays__slider").slick('refresh');
	}

	$('.nav-menu__turn').on('click', curtailMenu);


	$(window).on('resize', function() {
		var windowWidth = window.innerWidth;
		if(windowWidth <= 1201) {
			$('.container-wrap').addClass('curtail');
		} else if (windowWidth > 1200) {
			$('.container-wrap').removeClass('curtail');
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



	// троеточие в тексте

	var box = document.querySelector('.advertising__adt-text'),
    text = box.innerHTML,
    clone = document.createElement('div');

	clone.style.position = 'fixed';
	clone.style.top = '-1000px';
	clone.style.visibility = 'hidden';
	clone.style.width = box.clientWidth + 'px';
	clone.innerHTML = text;
	document.body.appendChild(clone);

	var l = text.length - 1;
	for (; l >= 0 && clone.clientHeight > box.clientHeight; --l) {
	    clone.innerHTML = text.substring(0, l) + '...';
	}

	box.innerHTML = clone.innerHTML;


	

}); 


