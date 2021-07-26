var mario = document.querySelector('.mario');
var dragon = document.querySelector('.dragon');
var gameover = document.querySelector('.gameover');
score = 0;
cross = true;


audiogameover = new Audio('gameover.mp3')
audioingame = new Audio('sound.mp3')

    
setTimeout(() => {
        audioingame.play();
}, 1000);


document.onkeydown = function (e) {
    console.log("key code is: ", e.code);
    if (e.code == "ArrowUp") {
        mario.classList.add('animatemario');
       
        setTimeout(() => {
            mario.classList.remove('animatemario');
        }, 700);
    }
    else if (e.code == "ArrowRight") {
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
        mario.style.left = mariox + 100 + 'px';
    }
    else if (e.code == "ArrowLeft") {
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
        mario.style.left = mariox - 100 + 'px';
    }
}

setInterval(() => {
    mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    marioy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    dragonx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dragony = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    offSetX = Math.abs(mariox - dragonx);
    offSetY = Math.abs(marioy - dragony);
    // console.log(offSetX, offSetY);

    if (offSetX < 82 && offSetY < 60){
        gameover.innerHTML = "Game Over - Reload to Play Again!";
        dragon.classList.remove('animategragon');
        audioingame.pause(); 
        audiogameover.play();
    }
    
    else if(offSetX<140 &&  cross){
        score += 1;
        updarescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            
            aniduration = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
        
            newdur = aniduration - 0.07;
        
            dragon.style.animationDuration = newdur + 's';
        }, 500);

    }

}, 10);

function updarescore(score) {
    scorecont.innerHTML = "Your Score: " + score;
}
