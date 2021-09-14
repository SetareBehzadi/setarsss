/* ------------------------------------------------------------------------------------------ */
/*                                          COMPONENT                                         */
/* ------------------------------------------------------------------------------------------ */
$('._responsive .menu-item-has-children > a').click(function(e) {
	e.preventDefault();
	var el = $(this);
	// console.log(el);
	var parentEl = el.parent();
	parentEl.find('.menu-item-has-children').removeClass('open');
	parentEl.siblings().removeClass('open');
	parentEl.siblings().find('.menu-item-has-children').removeClass('open');
	parentEl.toggleClass('open');
})

$('.show_add_item').click(function(e) {
	e.preventDefault();
	$('.content_add_item').toggleClass('show');
})
