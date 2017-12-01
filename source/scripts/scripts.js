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
	if(document.getElementsByClassName('.advertising__adt-text')){

		// var box = document.querySelector('.advertising__adt-text'),
	 //    text = box.innerHTML,
	 //    clone = document.createElement('div');

		// clone.style.position = 'fixed';
		// clone.style.top = '-1000px';
		// clone.style.visibility = 'hidden';
		// clone.style.width = box.clientWidth + 'px';
		// clone.innerHTML = text;
		// document.body.appendChild(clone);

		// var l = text.length - 1;
		// for (; l >= 0 && clone.clientHeight > box.clientHeight; --l) {
		//     clone.innerHTML = text.substring(0, l) + '...';
		// }

		// box.innerHTML = clone.innerHTML;

	}

	// закрыть любой попап

	$('.popup__close').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.popup').removeClass('active');
	});


	// настроение в офисе попап

	$('.popup-open').on('click', function(e) {
		console.log('!!!');
		e.preventDefault();
		var thisEl = $(this),
			thisVal = thisEl.data('popup');
		$('#' + thisVal).addClass('active');
	});

	// круговая  диаграмма

			var dataset = [
			{
			    value: 85,
			    color: '#ff8b00'
			  }, {
			    value: 10,
			    color: '#00aeff'
			  },  {
			    value: 5,
			    color: '#adadad'
			  }
			];

			var maxValue = 25;
			var container = $('.circle');

			var addSector = function(data, startAngle, collapse) {
			  var sectorDeg = 3.6 * data.value;
			  var skewDeg = 90 + sectorDeg;
			  var rotateDeg = startAngle;
			  if (collapse) {
			    skewDeg++;
			  }

			  var sector = $('<div>', {
			    'class': 'sector'
			  }).css({
			    'background': data.color,
			    'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
			  });
			  container.append(sector);

			  return startAngle + sectorDeg;
			};

			dataset.reduce(function (prev, curr) {
			  return (function addPart(data, angle) {
			    if (data.value <= maxValue) {
			      return addSector(data, angle, false);
			    }

			    return addPart({
			      value: data.value - maxValue,
			      color: data.color
			    }, addSector({
			      value: maxValue,
			      color: data.color,
			    }, angle, true));
			  })(curr, prev);
			}, 0);


			// // включаем скроллы
			// jQuery('.food__wrap').scrollbar();

	/*инпуты*/

	$('.input-block').on('click', function(e) {
		
		$(this).addClass('active');
		$(this).find('.input').focus();
	});	


	/*выпадающий блок в таблице заказов такси*/
	$('.table-order__button').on('click', function(e) {

		var thisBtn = $(this),
		thisBtnParent = thisBtn.closest('.table-order__info'),
		thisBtnDropdown = thisBtnParent.next();

		thisBtn.toggleClass('active');
		thisBtnDropdown.toggleClass('active');

	});	

	// jQuery('#datetimepicker').datetimepicker();
}); 


