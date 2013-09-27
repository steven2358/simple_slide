// https://github.com/steven2358/simple_slide

function show_next(ul_id, fadetime) {
	$active_slide = $("#"+ul_id+" li.active");
	$next_slide = $active_slide.next();
	if ($next_slide.index()<0) {
		$next_slide = $("#"+ul_id+" li:first");
	}
	
	$active_slide.removeClass('active').addClass('hiding');
	$active_slide.animate({opacity: 0}, fadetime);
	
	$next_slide.show().css({opacity: 0})
	.addClass('active')
	.animate({opacity: 1}, fadetime, function() {
		$active_slide.removeClass('hiding');
		});
}

function simple_slide(ul_id, duration, fadetime){	
	$("#"+ul_id+" li").css({opacity: 0});
	$("#"+ul_id+" li:first").show().addClass("active").css({opacity: 1});

	play = setInterval(function(){
		show_next(ul_id);
	}, duration);
};
