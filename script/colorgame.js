$(function(){
//Initialisation
    var user = prompt('Please enter your name and press enter to start the game:');
    $('.gameCube').each(function(){
        var colorValue = 'RGB(' + generateColor() +', '+ generateColor() +', '+ generateColor() + ')';
        $(this).css('background', colorValue);
    })
    var randomToSix = Math.floor(Math.random()*6);
    var currentBlock = $('.gameCube').eq(randomToSix).css('background-color');
    var result = 0;
    var remaining = 6;
    $('.rgbColor').text(currentBlock);
    $('.resultDisplay').text(result);
    $('#name').text(user);
    printHighScores();

//Playing
    $('.gameCube').click(function(){
        if ($(this).css('background-color') == currentBlock){
            alert('Correct');
            result++;
        } else {
            alert('Nope. Quess again');
        }
        remaining--;
        $(this).css({'background-color': 'white', 'border': 'none'});
        $('.resultDisplay').text(result);
        $(this).off('click');
        do {
            randomToSix = Math.floor(Math.random()*6);
            currentBlock = $('.gameCube').eq(randomToSix).css('background-color');
            console.log(currentBlock);
            //assure that would be not a white background selection
        } while ((currentBlock == 'rgb(255, 255, 255)') & (remaining !==0));
        $('.rgbColor').text(currentBlock);
        if (remaining==0){
            $('.gameCube').off('click');
            $('.name').hide();
            $('.rgbColor').hide();
            $('button').fadeIn();
            setCookie(user, result, 360);
        }
    })

//Restart
    $('#restart').click(function(){
        location.reload();
    })
//Exit
    $('#exit').click(function(){
        window.close();
    })

})

function generateColor(){
    return Math.floor(Math.random()*256);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
    var ca = document.cookie.split(';');
    var c = [];
    for(var i = 0; i < ca.length; i++) {
        c.push(ca[i]);
        }
    return c.sort();
}

function printHighScores(){
    var highScores = getCookie();
    var hsLen = highScores.length;
    for (var i=0; i<hsLen; i++){
        $('<li>' + highScores[i] + '</li>').appendTo($('#hsList'));
    }
}