// JavaScript Document
$(function() {
	$('.hamburger').on('click', function(){
		$('header').toggleClass('OpenNav');
		$('header .header-pc-menu-right').fadeToggle(375);
		$('header .main-nav').fadeToggle(375);
	});
});


var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 20) {
		if(winScrollTop >= 20){
        $('header').addClass('header-bg');
		} 
    } else {
        $('header').removeClass('header-bg');
    }
    startPos = winScrollTop;
});