$('.mainVideo').on('ended',function(){
    $( ".mainVideo" ).hide();
    $( ".mainImage" ).fadeIn(700);
});

$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

$(function() {
    $('.mainImage').hide();
    $('.small-video').hide();
});
$('.small-element').hover(
    function() {
        $(this).children(".small-image").hide();
        $(this).children(".small-video").get(0).currentTime = 0;
        $(this).children(".small-video" ).show();
    },
    function(){
        $(this).children(".small-video").hide();
        $(this).children(".small-image" ).show();
    }
);