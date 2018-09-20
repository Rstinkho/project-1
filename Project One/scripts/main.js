var count = 0;
var countElement;
var displayCount = 0;
var speed = 100;

var redSnakeComments = document.getElementsByClassName("boxRight")
var greenSnakeComments = document.getElementsByClassName("textRightBottom")
var comRed = document.getElementById("textRight");
var comGreen = document.getElementById("textRightBottom");
var indicator = document.getElementById("boxLeft");





var checkScore = function () {
    if (score >= 3 && score <= 5 ) {
    $('.boxRight').addClass('animated shake');
    comRed.textContent = "eat more meat cmon dude"
    indicator.style.marginTop = "370px";

    } else if ( score >=5 && score <= 8) {
    $('.boxRightBottom').addClass('animated shake');
    comGreen.textContent = "vegetables is important dude"
    indicator.style.marginTop = "340px"

    } else if ( score >=8 && score <= 12) {
    $('.boxRight').addClass('animated swing');
    comRed.textContent = "meat is a source of protein bite it!"
    indicator.style.marginTop = "310px"

    } else if ( score >=12 && score <=20) {
    $('.boxRightBottom').addClass('animated swing');
    comGreen.textContent = "all vitamins are in greens, dont listen to this red"
    indicator.style.marginTop = "280px"

    } else if ( score >=20 && score <=25) {
    $('.boxRight').addClass('animated tada');
    comRed.textContent = "You will starve without meat. EAT!!!"
    indicator.style.marginTop = "250px"

    } else if ( score >=25 && score <=30) {
    $('.boxRightBottom').addClass('animated tada');
    comGreen.textContent = "the possibility of cancer is 10% more when u eat meat"
    indicator.style.marginTop = "160px"

    } else if ( score >=30 && score <=40) {
    $('.boxRight').addClass('animated wobble');
    comRed.textContent = "vegeterians suffer from heart deceases and diabetis"
    indicator.style.marginTop = "100px"

    } else if ( score >=30 && score <=40) {
    $('.boxRightBottom').addClass('animated wobble');
    comGreen.textContent = "to be vegetarian is trendy!"
    indicator.style.marginTop = "-55px"

    } else if ( score >=40 && score <=50) {
    $('.boxRight').addClass('animated jello');
    comRed.textContent = "seriously you will reject juicy medium rare striploin?"
    indicator.style.marginTop = "-120px"

    } else if ( score >=50 && score <=60) {
    $('.boxRightBottom').addClass('animated jello');
    comGreen.textContent = "there's worms inside the meat, dont touch!"
    indicator.style.marginTop = "-170px"

    }else if ( score >=60 && score <=68) {
    $('.boxRight').addClass('animated bounce');
    comRed.textContent = "the cows eat vegetables. Are you a cow?"
    indicator.style.marginTop = "-230px"

    } else if ( score >=68 && score <=75) {
    $('.boxRightBottom').addClass('animated bounce');
    comGreen.textContent = "Vetables is energy and live!"
    indicator.style.marginTop = "-275px"
}
};

gameover = false;


var doStuff = function(){
if (gameover !== true) {
    count++;
    if( count % speed === 0  ){
        //displayCount++;
        startGame();
        checkScore();


        if( score > 50 ){
            speed = 5;

        }else if( score >= 15 && score <=20 ){
            speed = 20;

        }else if( score >= 10 && score <=15 ){
            speed = 30;

        }else if( score >= 5 && score <=10 ){
            speed = 40;
        }
        }else if( score >= 1 && score <=5 ){
            speed = 50;

        }
}
};


var d = function(){
    pole.style.visibility = "visible";
    setInterval(doStuff, 1);

}


