var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 700000000000000,
    nav: true,
    dots: false,
    thumbs: true,
    thumbImage: false,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    autoplayHoverPause: true,
    thumbsPrerendered: true,

});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})
$(".owl-prev").html('<i class="fa fa-chevron-left "></i>');
$(".owl-next").html('<i class="fa fa-chevron-right "></i>');


$('.hero-wrapper')
    .mouseenter(function() {
        $('.owl-nav').show(0);
    })
    .mouseleave(function() {
        $('.owl-nav').hide(0);
    });



var owl = $('.owl-carousel-mobile');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 700000000000000,
    nav: true,
    items: 1,
    autoplayHoverPause: true,
    thumbsPrerendered: true,
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

$(".owl-prev").html('<i class="fa fa-chevron-left "></i>');
$(".owl-next").html('<i class="fa fa-chevron-right "></i>');