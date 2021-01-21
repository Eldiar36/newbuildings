$(document).ready(function(){
    $(".home-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:20,
    });
});
$(document).ready(function(){
    $(".offer-slider").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false,
            },
            480:{
                items:1,
                nav:true,
                dots:true,
            },
            767:{
                items:2,
            },
            991:{
                items:2,
            },
            1100:{
                items:3,

            },
            1500:{
                items:4
            }
        }
    });
});
$('.mobile-btn').on(  'click',function () {
    $('.mobile-btn').toggleClass('active')
    $('.nav_menu').toggleClass('active')
})
$('.nav_menu  li a').on('click',function () {
    $('.mobile-btn').removeClass('active')
    $('.nav_menu').removeClass('active')
})
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});