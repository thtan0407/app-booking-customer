$(document).ready(function () {
	new Swiper('#new-promotion-top', {
		autoplay: {
			delay: 10000
		},
		slidesPerView: 1.3,
		spaceBetween: 0,
		speed: 250,
		center: false,
		lazy: true,
		preloadImages: false,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	
	new Swiper('#new-promotion-bottom', {
		autoplay: {
			delay: 10000
		},
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 250,
		center: false,
		lazy: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	
	function rebookHistory(store, service, staff, time) {
		if (!$('#history').hasClass('active')) {
			$('#history').addClass('active');
			$('#history #store').val(store);
			$('#history #service').val(service);
			$('#history #staff').val(staff);
			$('#history #time').val(time);
		} else {
			$('#history').removeClass('active');
			$('#history #store').val('');
			$('#history #service').val('');
			$('#history #staff').val('');
			$('#history #time').val('dd/mm/yyyy');
		}
	}
	
	$('.btn-rebook').click(function () {
		let store = $(this).data('store');
		let service = $(this).data('service');
		let staff = $(this).data('staff');
		let time = $(this).data('time');
		rebookHistory(store, service, staff, time);
	});
	
	$('.lazyload').lazyload();
	
	$('#hamburger').click(function () {
		if ($('header.header.active').length > 0) {
			$('header.header').removeClass('active');
		} else {
			$('header.header').addClass('active');
		}
	});
	
	$(document).on("mouseup", function (e) {
		let o = $("header.header .header-navigation");
		o.is(e.target) || 0 !== o.has(e.target).length
		|| (
			$("header.header").removeClass("active")
		)
	});
	
	$('#notification').click(function () {
		if ($('header.header.show').length > 0) {
			$('.header-notification > ul > li').removeClass('showAction');
			$('header.header').removeClass('show');
		} else {
			$('header.header').addClass('show');
		}
	});
	
	$(document).on("mouseup", function (e) {
		let o = $("header.header .header-notification");
		o.is(e.target) || 0 !== o.has(e.target).length
		|| (
			$("header.header").removeClass("show"),
				$('.header-notification > ul > li').removeClass('showAction')
		)
	});
	
	$('.actionDelete').click(function (e) {
		if($(this).closest('li').hasClass('showAction')) {
			$(this).closest('li').removeClass('showAction');
		} else {
			$(this).closest('li').addClass('showAction');
		}
	})
});
