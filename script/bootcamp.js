//Top navigation visibility control under scroll
var marker = 60;
window.addEventListener("scroll", function(){
    var top = this.scrollY;
    var navig = document.getElementsByClassName('navigation');
    if (top > marker) {
        navig[0].className = 'navigation slideUp';
        marker = top;
    } else if (top <= marker) {
        navig[0].className = 'navigation slideDown';
        marker = top;
    }
});
//Mobile menu switch control
var naviga = document.getElementById("navIcon");
var lines1 = document.getElementById("line1");
var lines2 = document.getElementById("line2");
var lines3 = document.getElementById("line3");
var status = true;
naviga.onclick = function(){
    if (status) {
        document.getElementById('mobileLinks').style.display = 'block';
        status = false;
        lines1.className = "linea";
        lines2.className = "lineb";
        lines3.className = "linec";
    } else {
        document.getElementById('mobileLinks').style.display = 'none';
        status = true;
        lines1.className = "";
        lines2.className = "";
        lines3.className = "";
    }
};
//Red line control by scrolling
var topSpace = document.getElementsByTagName('header')[0].offsetHeight 
                + document.getElementsByClassName('intro')[0].offsetHeight 
                + document.getElementsByClassName('start')[0].offsetHeight
                + document.getElementsByClassName('line_container')[0].offsetTop
                + document.getElementsByClassName('circle')[0].offsetHeight
                - screen.height/2;
window.addEventListener("scroll", function(){
    var top1 = this.scrollY;
    var i = '';
    var progress = document.getElementsByClassName('progress');
    var backLineHeight = document.getElementsByClassName('line')[0].offsetHeight;
    var circle = document.getElementsByClassName('circle');
    var circleHeight = circle[0].offsetHeight;
    var redDot = document.getElementsByClassName('red_dot');
    var pulsingDot = document.getElementsByClassName('a');
    if (top1 >= topSpace) {
        if (top1 > topSpace + 5*(backLineHeight+circleHeight)){
            pulsingDot[5].className = 'a pulsing';
            progress[4].style.height = "100%";
            circle[5].className = 'circle circleBig';
            redDot[5].style.background = '#ed1b24';
        } else if (top1 > topSpace + 4*(backLineHeight+circleHeight)) {
            i = Math.floor((top1 - (topSpace + 4*(backLineHeight+circleHeight)))/(backLineHeight/100));
            progress[4].style.height = i + "%";
            progress[3].style.height = '100%';
            pulsingDot[4].className = 'a pulsing';
            circle[4].className = 'circle circleBig';
            pulsingDot[5].className = 'a';
            circle[5].className = 'circle';
            redDot[4].style.background = '#ed1b24';
            redDot[5].style.background = '#c5d3db';
        } else if (top1 > topSpace + 3*(backLineHeight+circleHeight)) {
            i = Math.floor((top1 - (topSpace + 3*(backLineHeight+circleHeight)))/(backLineHeight/100));
            progress[3].style.height = i + "%";
            progress[2].style.height = '100%';
            progress[4].style.height = '0%';
            pulsingDot[3].className = 'a pulsing';
            circle[3].className = 'circle circleBig';
            pulsingDot[4].className = 'a';
            circle[4].className = 'circle';
            redDot[3].style.background = '#ed1b24';
            redDot[4].style.background = '#c5d3db';
        } else if (top1 > topSpace + 2*(backLineHeight+circleHeight)) {
            i = Math.floor((top1 - (topSpace + 2*(backLineHeight+circleHeight)))/(backLineHeight/100));
            progress[2].style.height = i + "%";
            progress[1].style.height = '100%';
            progress[3].style.height = '0%';
            pulsingDot[2].className = 'a pulsing';
            circle[2].className = 'circle circleBig';
            pulsingDot[3].className = 'a';
            circle[3].className = 'circle';
            redDot[2].style.background = '#ed1b24';
            redDot[3].style.background = '#c5d3db';
        } else if (top1 > topSpace + backLineHeight+circleHeight) {
            i = Math.floor((top1 - (topSpace + backLineHeight + circleHeight))/(backLineHeight/100));
            progress[1].style.height = i + "%";
            progress[0].style.height = '100%';
            progress[2].style.height = '0%';
            pulsingDot[1].className = 'a pulsing';
            circle[1].className = 'circle circleBig';
            pulsingDot[2].className = 'a';
            circle[2].className = 'circle';
            redDot[1].style.background = '#ed1b24';
            redDot[2].style.background = '#c5d3db';
        } else {
            i = Math.floor((top1 - topSpace)/(backLineHeight/100));
            progress[0].style.height = i + "%";
            progress[1].style.height = '0%';
            pulsingDot[0].className = 'a pulsing';
            circle[0].className = 'circle circleBig';
            pulsingDot[1].className = 'a';
            circle[1].className = 'circle';
            redDot[0].style.background = '#ed1b24';
            redDot[1].style.background = '#c5d3db';
        }
        console.log(top1 + " " + i);
    }
    else {
        progress[0].style.height = '0%';
        pulsingDot[0].className = 'a';
        circle[0].className = 'circle';
        redDot[0].style.background = '#c5d3db';
    }
});