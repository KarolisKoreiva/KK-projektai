$(function(){
    var waypoints = $('.contentWrap').waypoint({
        handler: function(direction) {
          $('.items').eq(0).addClass('animated slideInLeft').css('visibility', 'visible');
          $('.items').eq(1).addClass('animated slideInUp').css('visibility', 'visible');
          $('.items').eq(2).addClass('animated slideInRight').css('visibility', 'visible');
       },
       offset: '30%'
    });
    var waypoints = $('.clown').waypoint({
        handler: function(direction) {
          $('.clownWrap').addClass('animated slideInLeft').css('visibility', 'visible');
        },
       offset: '30%'
    });
    var waypoints = $('.about').waypoint({
        handler: function(direction) {
          $('.footerItems').eq(0).addClass('slideFromLeft1');
          $('.footerItems').eq(1).addClass('slideFromLeft1000');
          $('.footerItems').eq(2).addClass('slideFromLeft1500');
        },
       offset: '40%'
    });
}) 