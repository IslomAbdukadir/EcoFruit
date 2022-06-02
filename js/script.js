// burger menu 

nav = document.querySelector('.header__search')

$('.header__search').click( function() {
    $('body').addClass('menu');
    $('.header__menu').addClass('menu');
    $('.header__nav').addClass('menu');
    $('.menu-bar').addClass('menu');
    $('.header__list').addClass('menu');
    $('.header__setup').addClass('menu');
})

 // Swiper sliders 

	const homeSlider = new Swiper('.home-slider', {
		speed: 800,
		effect: 'fade',
		centeredSlides: true,
		pagination: {
			el: '.home-slider__pagination',
            clickable: true,
			// renderCustom: function (swiper, current, total) {
			// 	let indT = total >= 10 ? total : `0${total}`
			// 	let indC = current >= 10 ? current : `0${current}`
			// 	return `<b>${indC}</b><span></span> ${indT}`
			// }
		},
		scrollbar: {
			el: '.home-siler__scrollbar',
			draggable: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		runCallbacksOnInit: true
	})

    // nav

var mediaTop = $('.scroll').offset().top; 
var media = $('.scroll');

$(document).scroll( function() {
   var scrollTop = $(document).scrollTop();

   //fix/unfix as necessary
   if (mediaTop < scrollTop) {
       $(media).addClass('black'); 
   }
   else { 
       $(media).removeClass('black'); 
   }
});

