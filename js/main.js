$(function(){
	// $('.video-mask').hover(function(){
	// 	$(this).css('opacity','0');
	// },function(){
	// 	$(this).css('opacity','0.3');
	// })
	// 
	$('.dropdown').hover(function(e){
		$(this).find('.mega-wrap').fadeIn();
		$(this).find('a').eq(0).addClass('bg');
	},function(){
		$(this).find('.mega-wrap').fadeOut('slow');
		$(this).find('a').eq(0).removeClass('bg');
	});
});