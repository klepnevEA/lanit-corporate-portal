$(document).ready(function() {


	//табы на странице food
	$('.food-page__tabs-item').click(function() {
		$('.food-page__tabs-item').removeClass('active');
		$(this).toggleClass('active');
	});

		//сендвичи в разделе видео
		$('.title_comments').click(function(e) {
			e.preventDefault();
			$(this).closest('.comments-wrap').toggleClass('active');

		});

	//сендвичи в разделе food
	$('.food-page__sandwich-title').click(function() {
		$(this).parent('.food-page__sandwich').toggleClass('active');
		
	});

	//вызов прелоадера
	$('.preloader__on').click(function() {
		$('.preloader__wrap').addClass('active');
	});
	$('.preloader__wrap').click(function () {
		$(this).addClass('closed');
		setTimeout(function() {
			$('.preloader__wrap').removeClass('closed active');
		}, 500);
	});


	// мультиселект
	function bindSelectedItemsToInput() {
		var selectedItemsAsString = "";
		var selectedItems = $('.ml-mselect__item.active');
		var selectedItemsCount = selectedItems.length;

		selectedItems.each(function(index) {
			selectedItemsAsString += $(this).text();
			if(index != selectedItemsCount - 1)
				selectedItemsAsString += ', ';
		});
		$('.ml-mselect__input').val(selectedItemsAsString);
	}

	bindSelectedItemsToInput();

	$('.ml-mselect__input, .ml-mselect .mdi-chevron-down').click(function() {
		var $mlDropbox = $(this).siblings('.ml-mselect__dropbox');
		var $mlContainer = $(this).closest('.ml-mselect');
		if(!$mlDropbox.hasClass("active"))
		{
			$('.ml-mselect__dropbox, .ml-mselect').removeClass("active");
		}

		$mlDropbox.toggleClass('active');
		$mlContainer.toggleClass('active');
	});

	$( '.ml-mselect__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInput();
	});




	//мультиселек с поиском
	function bindSelectedItemsToInputSearch() {

		$('.ml-mselect-search__result').last().empty();
		var selectedItems = $('.ml-mselect-search__item.active');

		selectedItems.each(function(index) {
			$('.ml-mselect-search__result').last().append('<div class="ml-mselect-search__result-item">' + $(this).text()  +  '<i class="mdi mdi-close"></i></div>');
		});


		if($('.ml-mselect-search__item.active').length > 0) {
			$('.ml-mselect-search__box').removeClass('empty');
		}
		else {
			$('.ml-mselect-search__box').addClass('empty');
			
		}
		
	}

	bindSelectedItemsToInputSearch();

	$('.ml-mselect-search__box,  .mdi-chevron-down').click(function(e) {
		if($(e.target).is('.ml-mselect-search__box,  .mdi-chevron-down'))
		{
			var $mlDropbox = $(this).siblings('.ml-mselect-search__dropbox');
			var $mlContainer = $(this).closest('.ml-mselect-search');
			if(!$mlDropbox.hasClass("active"))
			{
				$('.ml-mselect-search__dropbox, .ml-mselect-search').removeClass("active");
			}

			$mlDropbox.toggleClass('active');
			$mlContainer.toggleClass('active');
		}
	});

	$( '.ml-mselect-search__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInputSearch();
	});

	$(document).on("click", ".ml-mselect-search__result-item  .mdi-close", function(e) {
		SelectBlock = $(this).parent().text();
		console.log(SelectBlock);


		$('.ml-mselect-search__item').each(function(index) {
			if ( $(this).text() == SelectBlock) {
				$(this).removeClass('active');
				bindSelectedItemsToInputSearch();
			}
		});

	});
	
	$(".input.ml-mselect-search__input").keyup(function(e){
		var items = $('.ml-mselect-search__item');
		var changedValue = $(e.currentTarget).val().toLowerCase();
		if(changedValue.length >= 3)
		{
			console.log(changedValue);

			items.each(function(index) {
				if( $(this).text().toLowerCase().indexOf(changedValue) == 0) {
					$(this).show();
				}
				else
				{
					$(this).hide();
				}
			});
		}
		else
		{
			items.show();
		}
	});





	// селект
	function initCustomSelectControls() {
		$('.ml-select__item.active').each(function() {
			var $container = $(this).closest(".ml-select");
			$container.find('.ml-select__input').val($(this).text());
		});

		$('.ml-select .mdi-chevron-down, .ml-select__input').click(function() {
			var $container = $(this).closest('.ml-select');

			if(!$container.hasClass("active"))
			{
				$('.ml-select.active, .ml-select__dropbox.active').removeClass('active');
			}

			$container.find('.ml-select__dropbox').toggleClass('active');
			$container.toggleClass('active');
		});
		
		$('.ml-select__item').click(function() {
			var $container = $(this).closest(".ml-select");
			if ($(this).hasClass('active')) {
				$container.find('.ml-select__item').removeClass('active');
			}
			else {
				$container.find('.ml-select__item').removeClass('active');
				$(this).addClass('active');
			}
			
			var secletedText = $container.find('.ml-select__item.active').text();
			$container.find('.ml-select__input').val(secletedText);

			$container.find('.ml-select__dropbox').removeClass('active');
			$container.removeClass('active');
		});
	}
	

	initCustomSelectControls();

	





	// всплывающие меню в хедере
	$('.user-info__wpap').click(function() {
		$('.user-info__dropdovn').toggleClass('active');
	});

	$('.your-office__dropdown').click(function() {
		$('.your-office__dropdown-box').toggleClass('active');
		$(this).toggleClass('active');
	});
	$('.your-office__dropdown-item').click(function() {
		$('.your-office__dropdown-item').removeClass('active');
		$(this).addClass('active');
		var SelectText = $(this).text();
		$('.your-office__dropdown-btn > span').text(SelectText);
	});



	



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

    // закрыть попап при клике по фону
    /*
    $('.popup').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.popup').removeClass('active');
	});
	*/

	// настроение в офисе попап

	$('.popup-open').on('click', function(e) {
		console.log('!!!');
		e.preventDefault();
		var thisEl = $(this),
		thisVal = thisEl.data('popup');
		$('#' + thisVal).addClass('active');
	});




	// // круговая  диаграмма

	function r1() {
		$a = 60					//длинна первой полосы
		$c = 25; 				//длинна второй полосы	
		$e = 15; 				//длинна третье полосы 

								//в сумме а,b,с - должны давать 100

		$b = 100 - $a;			//пропуск первой полосы в сумме a,b 100
		$d = 100 - $c; 			//пропуск второй полосы в сумме d,c 100
		$f = 100 - $e;			//пропуск третьей полосы в сумме e,f 100
		$cd = 100 - $a + 25;	//смещение относительно стартовой позиции второй полосы
		$ef = $cd - $c; 		//смещение относительно стартовой позиции третьей полосы

		$('.donut-segment-1').attr('stroke-dasharray', [$a, $b]); //передаем значения в сегмент 1

		$('.donut-segment-2').attr('stroke-dasharray', [$c, $d]); //передаем значения в сегмент 2
		$('.donut-segment-2').attr('stroke-dashoffset', $cd); // смещаем второй элемент

		$('.donut-segment-3').attr('stroke-dasharray', [$e, $f]); //передаем значения в сегмент 3
		$('.donut-segment-3').attr('stroke-dashoffset', $ef); // смещаем третий элемент
	};
	r1(); //вызвыаем функцию при загрузке страницы

	

	// // включаем скроллы
	jQuery('.scrollbar-style').scrollbar();


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

// Select
$('.select').each(function(){
		// Variables
		var $this = $(this),
		selectOption = $this.find('option'),
		selectOptionLength = selectOption.length,
		selectedOption = selectOption.filter(':selected'),
		dur = 200;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: '08.00'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
		caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});

	// календарь
	$( function() {
		$( "#datepicker" ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			range: "period",
			onSelect: function(dateText, inst, exstRange) {
				$("#datepicker").val(exstRange.startDateText + "-" + exstRange.endDateText);
			}
		});
	} );

	$("#fileupload").fileupload({
		change : function(e, data) {
			$.each(data.files, function (index, file) {
				appendFile(file);
			});
		},
		drop: function (e, data) {
			$.each(data.files, function (index, file) {
				appendFile(file);
			});

			$(e.target).closest(".fileinput-button").removeClass("dragover");
		},
		add: function (e, data) {
			e.preventDefault();
		},
		dragover : function (e, data) {
			$(e.target).closest(".fileinput-button").addClass("dragover");
		},

	});

	function  appendFile(file) {
		var fileDivHtml = "<div class='fileinput-files__line'><a href='#'>" + file.name + "</a> <span>" + (file.size / 1024) + "КБ</span> <i class='mdi mdi-close'></i></div>";
		$(".fileinput-files").append(fileDivHtml);
	}

	var msnry = new Masonry( '.photo-grid__list', {

		itemSelector: '.photo-grid__item'
	});
	




    // fullcalendar
    $('#calendar').fullCalendar({
    	header: {
    		left: 'CustomButtonOpenAll CustomButtonCloseAll',
    		center: 'prev title next',
            right: 'month agendaWeek agendaDay' //,listMonth
        },
        customButtons: {
        	CustomButtonOpenAll: {
        		text: 'Развернуть все',
        		click: function() {
        			alert('что-то произошло');
        		}
        	},
        	CustomButtonCloseAll: {
        		text: 'Свернуть все',
        		click: function() {
        			alert('что-то произошло');
        		}
        	}
        },
        eventClick: function(eventObj) {
        	if (eventObj.url) {
        		alert(
        			'Clicked ' + eventObj.title + '.\n' + 'Will open ' + eventObj.url + ' in a new tab'
        			);

        		window.open(eventObj.url);

                return false; // prevents browser from following link in current tab.
                
            } else {
                //alert('Clicked ' + eventObj.title);
                $('#popup-call-win-main').addClass( "active" );
            }
        },
        googleCalendarApiKey: 'AIzaSyC75vIG5KcFLo4tOrAbMLDH6wzZokIFPRM',
        eventSources: [
        {
        	googleCalendarId: 'en.russian#holiday@group.v.calendar.google.com',
        	className: 'fc-gcal-event'
        }
        ],
        fixedWeekCount: false,
        defaultDate: '2018-03-12',
        noEventsMessage: '',
        displayEventTime: true,
        displayEventEnd: true,
        locale: 'ru',
        //buttonIcons: true, // show the prev/next text
        //weekNumbers: true,
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: 4, // allow "more" link when too many events
        contentHeight : 250,
        allDaySlot: false,
        //aspectRatio: 12,
        height: 'auto',
        slotLabelFormat: [
        'HH:mm'
        ],
        events: [
        {
        	id: 1,
        	title: 'Сухаев Яков',
        	start: '2018-03-01T09:00:00',
        	end: '2018-03-01T11:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Евграфова Марина',
        	start: '2018-03-01T14:30:00',
        	end: '2018-03-01T15:30:00',
        	className: 'fc-event-blue'
        },
        {
        	title: 'Евграфова Марина',
        	start: '2018-03-01T15:30:00',
        	end: '2018-03-01T16:30:00',
        	className: 'fc-event-green'
        },
        {
        	title: 'Евграфова Марина',
        	start: '2018-03-01T17:30:00',
        	end: '2018-03-01T18:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-02T11:00:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-02T11:00:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-02T12:00:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-02T14:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-02T15:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-05T10:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-05T11:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-05T14:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-06T10:30:00',
        	className: 'fc-event-orange'
        },
        {
        	title: 'Сухаев Яков',
        	start: '2018-03-07T10:30:00',
        	className: 'fc-event-orange'
        },
            /*
            {
                title: 'Сухаев Яков',
                start: '2018-03-08T10:30:00',
                className: 'fc-event-orange'
            },
            {
                title: 'Сухаев Яков',
                start: '2018-03-08T12:30:00',
                className: 'fc-event-orange'
            },
            {
                title: 'Сухаев Яков',
                start: '2018-03-08T14:30:00',
                className: 'fc-event-blue'
            },
            {
                title: 'Сухаев Яков',
                start: '2018-03-09T10:30:00',
                className: 'fc-event-orange'
            },
            {
                title: 'Сухаев Яков',
                start: '2018-03-09T12:30:00',
                className: 'fc-event-orange'
            },
            {
                title: 'Сухаев Яков',
                start: '2018-03-09T14:30:00',
                className: 'fc-event-green'
            },
            */
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-12T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-12T11:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-12T14:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-13T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-13T13:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-14T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-148T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-14T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-14T14:30:00',
            	className: 'fc-event-blue'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-15T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-15T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-15T14:30:00',
            	className: 'fc-event-green'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-16T10:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-16T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-16T14:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-19T14:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-20T14:30:00',
            	className: 'fc-event-green'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-21T14:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-22T14:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-23T14:30:00',
            	className: 'fc-event-blue'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-26T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-27T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-28T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-29T12:30:00',
            	className: 'fc-event-orange'
            },
            {
            	title: 'Сухаев Яков',
            	start: '2018-03-30T12:30:00',
            	className: 'fc-event-orange'
            }
            ],
            timeFormat: 'HH:mm'
        });





}); 




