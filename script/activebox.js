$(function(){
    
    //header animation
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('nav').css({'background':'#2c2f49','height':'80px'});
        } else {
            $('nav').css({'background':'none','height':'100px'});
            $('#features').removeClass('activeA');
        }
    });
    //Grid animation
    var waypoints = $('.grid').waypoint({
        handler: function(direction) {

          $('.gridBox').eq(0).addClass('animated fadeInLeft').css({"visibility":"visible", "z-index":"20"}); 
          setTimeout(function(){
            $('.gridBox').eq(1).addClass('animated fadeInLeft').css({"visibility":"visible", "z-index":"19"});}, 
            200);   
          setTimeout(function(){
            $('.gridBox').eq(2).addClass('animated fadeInLeft').css({"visibility":"visible", "z-index":"18"});}, 
            400);   
        setTimeout(function(){
            $('.gridBox').eq(3).addClass('animated fadeInLeft').css({"visibility":"visible", "z-index":"17"});}, 
            600); 
        setTimeout(function(){
            $('.gridBox').eq(7).addClass('animated fadeInDown').css({"visibility":"visible", "z-index":"16"});}, 
            800); 
        setTimeout(function(){
            $('.gridBox').eq(6).addClass('animated fadeInRight').css({"visibility":"visible", "z-index":"15"});}, 
            1000); 
        setTimeout(function(){
            $('.gridBox').eq(5).addClass('animated fadeInRight').css({"visibility":"visible", "z-index":"14"});}, 
            1200); 
        setTimeout(function(){
            $('.gridBox').eq(4).addClass('animated fadeInRight').css({"visibility":"visible", "z-index":"13"});}, 
            1400); 
        }, offset: '70%'
    });
    //switch box
    $('.round').click(function(){
        if (!$(this).hasClass('active')) {
            $('.active').removeClass('active');
            $(this).addClass('active');
            if ($('.images').css('display') != 'none'){
                $('.images').fadeOut(600);
            } else {
                $('.images').fadeIn(600);
            }
            $('#firstCite').toggleClass('hidden');
            $('#firstP').toggleClass('hidden');
            $('#secondCite').toggleClass('hidden');
            $('#secondP').toggleClass('hidden');
        }
    });
    var delayedTestimonials = setInterval(function(){
        if ($('.images').css('display') != 'none'){
            $('.images').fadeOut(600);
        } else {
            $('.images').fadeIn(600);
        }
        $('#firstCite').toggleClass('hidden');
        $('#firstP').toggleClass('hidden');
        $('#secondCite').toggleClass('hidden');
        $('#secondP').toggleClass('hidden');
    }, 5000);
    //bottom bottom animation
    var waypoints = $('.lastContent').waypoint({
        handler: function(direction) {
            $('.btn').addClass('animated tada');
        }, offset: '50%'
    });
    //navigation active
    var inview = new Waypoint.Inview({
        element: $('.features'),
        entered: function(direction) {
            $('#features').addClass('activeA');
            $('#works').removeClass('activeA');
        }
    })
    var inview1 = new Waypoint.Inview({
        element: $('.works'),
        entered: function(direction) {
            $('#works').addClass('activeA');
            $('#features').removeClass('activeA');
            $('#team').removeClass('activeA');
        }
    })
    var inview2 = new Waypoint.Inview({
        element: $('.team'),
        entered: function(direction) {
            $('#team').addClass('activeA');
            $('#works').removeClass('activeA');
            $('#testimonials').removeClass('activeA');
        }
    })
    var inview3 = new Waypoint.Inview({
        element: $('.testimonials'),
        entered: function(direction) {
            $('#testimonials').addClass('activeA');
            $('#team').removeClass('activeA');
        }
    })
}) 