/* ------------------------------------------------------------------------------------------ */
/*                                          COMPONENT                                         */
/* ------------------------------------------------------------------------------------------ */
$('._responsive .menu-item-has-children > a').click(function (e) {
    e.preventDefault();
    var el = $(this);
    // console.log(el);
    var parentEl = el.parent();
    parentEl.find('.menu-item-has-children').removeClass('open');
    parentEl.siblings().removeClass('open');
    parentEl.siblings().find('.menu-item-has-children').removeClass('open');
    parentEl.toggleClass('open');
})

$('.show_add_item').click(function (e) {
    e.preventDefault();
    $('.content_add_item').toggleClass('show');
})

$('.has-child > a').click(function (e) {
    e.preventDefault();
    let parentEl = $(this).parent();
    parentEl.toggleClass('active');
    //parentEl.siblings().removeClass('active');
})

var owl = $('.box-content-x1 .owl-carousel');
owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    dots: false,
    nav:false
});