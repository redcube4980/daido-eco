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


jQuery(function(){
   jQuery(window).scroll(function(){
      var obj_t_pos = jQuery('#site-top-link-hamaton').offset().top;
      var scr_count = jQuery(document).scrollTop() + (window.innerHeight/2); // ディスプレイの半分の高さを追加
      if(scr_count > obj_t_pos){
         jQuery('#site-top-link-hamaton').addClass('open');
      }else{
         jQuery('#site-top-link-hamaton').removeClass('open');
      }
   })
})

jQuery(function(){
   jQuery(window).scroll(function(){
      var obj_t_pos = jQuery('#site-top-link-inochi').offset().top;
      var scr_count = jQuery(document).scrollTop() + (window.innerHeight/2); // ディスプレイの半分の高さを追加
      if(scr_count > obj_t_pos){
         jQuery('#site-top-link-inochi').addClass('open');
      }else{
         jQuery('#site-top-link-inochi').removeClass('open');
      }
   })
})




$(function(){
		var countElm = $('.count'),
		countSpeed = 1;
		
		countElm.each(function(){
			var self = $(this),
			countMax = self.attr('data-num'),
			thisCount = self.text(),
			countTimer;

			function timer(){
				countTimer = setInterval(function(){
					var countNext = thisCount++;
					self.text(countNext);

					if(countNext == countMax){
						clearInterval(countTimer);
					}
				},countSpeed);
			}
			timer();
		});
});

$(function() {
  // ①タブをクリックしたら発動
  $('.tab li').click(function() {
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active');
	$('.show .number span').text("0").remove('count');
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('#content-box-right .content-box-right-inner').removeClass('show').fadeOut(375).eq(index).addClass('show').fadeIn(375);
	$('.number span').text("0").addClass('count');
	$(function(){
		var countElm = $('.count'),
		countSpeed = 1;
		
		countElm.each(function(){
			var self = $(this),
			countMax = self.attr('data-num'),
			thisCount = self.text(),
			countTimer;

			function timer(){
				countTimer = setInterval(function(){
					var countNext = thisCount++;
					self.text(countNext);

					if(countNext == countMax){
						clearInterval(countTimer);
					}
				},countSpeed);
			}
			timer();
		});
		});
  });
});


 $(document).ready(function() {
        $('#modul-button-kenshu').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu01').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu02').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu03').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu04').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu05').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
$('#modul-button-kenshu06').magnificPopup({
          disableOn: 0,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
