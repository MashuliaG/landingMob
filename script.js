function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}
$(document).on("scroll", function () {
    if ($(window).scrollTop()==0)
        $("header").removeClass("fixed");
    else
        $("header").attr("class", "fixed");
})


$(document).ready(function(){
    var $heading = $(".heading");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $heading.hasClass("default") ){
            $heading.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && $heading.hasClass("fixed")) {
            $heading.removeClass("fixed").addClass("default");
        }
    });//scroll
});


function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if($(this).scrollTop()  >= 15){
            button.fadeIn();
        }else {
            button.fadeOut();
        }
    });

    button.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    });
}
backToTop();


// Callback
$('body').on('click', '#popup__toggle', function(e) {
    e.preventDefault();

    $('.overlay').fadeIn();
    $('.popup').fadeIn().css('display', 'flex');
});

$('.popup__cross').on('click', function(){
    $('.overlay').fadeOut();
    $('.popup').fadeOut();
});

// menu
$('.hamburger').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('is-active');
    $('.heading nav').slideToggle();
});