// https://github.com/steven2358/simple_slide
// version compatible with jQuery 1.3.2

function show_next(ul_id, fadetime) {
	$active_slide = $(ul_id).children(".active");
	if ($active_slide.prevAll().length < $(ul_id).children().length-1) {
		$next_slide = $active_slide.next();
	}
	else {
		$next_slide = $(ul_id).children().eq(0);		
	}
	
	$active_slide.removeClass('active');
	$active_slide.animate({opacity: 0}, fadetime);
	
	$next_slide.show().css({opacity: 0})
	.addClass('active')
	.animate({opacity: 1}, fadetime);
}

function simple_slide(ul_id, duration, fadetime){	
	$(ul_id).children().css({opacity: 0}).removeClass("active");
	$(ul_id).children().eq(0).show().addClass("active").css({opacity: 1});
	
	// rotate all images
	play = setInterval(function(){
		show_next(ul_id);
	}, duration);
};
