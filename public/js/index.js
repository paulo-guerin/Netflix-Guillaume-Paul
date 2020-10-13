$(function () {

    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $('#mainVideo').on('ended',function(){
        $( "#mainVideo" ).hide();
        $( "#mainImage" ).fadeIn(700);
    });

    $('.smallVideoDiv').hover( 
        function() {
            $(this).children(".imgVideo").hide();
            $(this).children(".smallVideo").get(0).currentTime = 0;
            $(this).children(".smallVideo" ).show();
        }, 
        function(){
            $(this).children(".smallVideo").hide();
            $(this).children(".imgVideo" ).show();
        }
    );
});
