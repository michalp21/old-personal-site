$(document).ready(function(e) {
    $('.panel').addClass('rounded');
    $('.image').addClass('rounded');
    $('.description').addClass('rounded');

    $(window).scroll(function(){
        $(".scroll").css("opacity", (400-$(window).scrollTop()) /200);
    });

    // $('a').hover(function() {
    //     $('body').animate({backgroundColor: '#FF0000'}, 'slow');
    // });
});