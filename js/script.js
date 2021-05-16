$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__2row,.header__block2').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.footer__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.footer__title').not($(this)).removeClass('active');
			$('.footer__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.slider2').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.news__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		rows: 2,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
});