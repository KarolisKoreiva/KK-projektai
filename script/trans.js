$(function(){
//Top menu picture control
    $('.menu1').hover(function(){
        $('#mImg1').fadeIn();
    }, function(){
        $('#mImg1').fadeOut();
    });
    $('.menu2').hover(function(){
        $('#mImg2').fadeIn();
    }, function(){
        $('#mImg2').fadeOut();
    });
    $('.menu3').hover(function(){
        $('#mImg3').fadeIn();
    }, function(){
        $('#mImg3').fadeOut();
    });
    $('.menu4').hover(function(){
        $('#mImg4').fadeIn();
    }, function(){
        $('#mImg4').fadeOut();
    });

//Bottom slider control with animation, but finite
    // $('.leftA').click(function(){
    //     var posCard = $('.cardWrap').offset();
    //     $('.cardWrap').offset({top: posCard.top, left: posCard.left+500});
    // })
    // $('.rightA').click(function(){
    //     var posCard = $('.cardWrap').offset();
    //     $('.cardWrap').offset({top: posCard.top, left: posCard.left-500});
    // })
//Bottom slider without animation, but infinite
    // $('.leftA').click(function(){
    //     var lastCard = $('.card:last').detach();
    //     $('.card:first').before(lastCard);
    // })
    // $('.rightA').click(function(){
    //     var lastCard = $('.card:first').detach();
    //     $('.card:last').after(lastCard);
    // })
//Bottom slider with animation and infinite
    $('.leftA').click(function(){
        $('.card').addClass('transXLeft');
        setTimeout(function(){
            var first = $('.card:first');
            var last = $('.card:last');
            $('.card').removeClass('transXLeft');
            first.before(last);
        }, 500);
    });
    $('.rightA').click(function(){
        $('.card').addClass('transXRight');
        setTimeout(function(){
            var first = $('.card:first');
            var last = $('.card:last');
            $('.card').removeClass('transXRight');
            last.after(first);
        }, 500);
    });

//Top menu transparency control
    $(window).scroll(function(){
        if ($(window).scrollTop() == 0) {
            $('.shade').fadeOut();
        } else {
            $('.shade').fadeIn();
        }
    });
//Hidden main menu control
    // $('.burger').click(function(){
    //     $('.hiddenMenu').toggle(function(){
    //         $('.hiddenMenu').width('0%');
    //     }, function(){
    //         $('.hiddenMenu').width('30%');
    //     });
    // });
    $('.burger').click(function(){
        $('.hiddenMenu').toggleClass('showWidth');
    });
})