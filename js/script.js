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

