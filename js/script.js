$(function() {
	$('.hamburger').on('click', function(){
		$('header').toggleClass('openNav');
	});
});

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
		if(winScrollTop >= 320){
        $('.site-header').addClass('hide');
		$('.clone-submenu').addClass('hide2');
		} 
    } else {
        $('.site-header').removeClass('hide');
		$('.clone-submenu').removeClass('hide2');
    }
    startPos = winScrollTop;
});

function menuAnimation(){wW>920?$("#main-menu").slideToggle(375):$("#main-menu").fadeToggle(375),0==menuFlg?(menuFlg=!0,$("header").removeClass("header_off"),$("header").addClass("header_on"),$("header").addClass("header_keep")):(menuFlg=!1,$("header").removeClass("header_on"),$("header").addClass("header_off"),$("header").delay(375).queue(function(){$(this).removeClass("header_keep").dequeue()}))}

$(function() {
  var $win = $(window),
      $cloneNav = $('.header-submenu').clone().addClass('clone-submenu').appendTo('body'),
      showClass = 'isnotshow';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 700 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});

window.sr=ScrollReveal(),sr.
	reveal(".animate",{origin:"left",duration:1500,reset:"true",easing:"ease-in-out",viewFactor:.3,distance:"100%",opacity:0,scale:1}),
	sr.reveal(".animate2",{origin:"right",duration:1500,reset:"true",easing:"ease-in-out",viewFactor:.3,distance:"100%",opacity:0,scale:1}),
	sr.reveal(".animate3",{origin:"left",duration:1800,reset:"true",easing:"ease-in-out",viewFactor:.3,distance:"30%",opacity:0,scale:1}),
	sr.reveal(".animate4",{origin:"left",duration:1800,reset:"true",easing:"ease-in-out",viewFactor:.3,distance:"60%",opacity:0,scale:1}),
	sr.reveal(".animate5",{origin:"left",duration:1500,reset:"true",easing:"ease-in-out",viewFactor:0,distance:"0",opacity:0,scale:1})
