document.addEventListener("DOMContentLoaded", game)



function game() {

    var game = document.getElementById("game");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundary = document.getElementsByClassName("boundary");
    var scoring = document.getElementsByClassName("example");
    var status = document.getElementById("status");
    var newgame = 0; 
    var start_round;
    var score = 0; 
    var hit;
   
    function startGame() {
        start_round = 1;
        hit = 0;
        scoring[0].innerHTML = "score: " + score;
        status.innerHTML = "Begin by moving your mouse over the \"S\".";
        removeColor();
    }
    function removeColor() {
        for (var i = 0; i < boundary.length - 1; i++) {
            boundary[i].style.backgroundColor = "";
        }
    }
    start.onmouseover = startGame;
    

    function hittingBorder() {
        if (start_round == 1) {
            for (var j = 0; j < boundary.length - 1; j++) {
                boundary[j].style.backgroundColor = "red";
                hit = 1;
                scoring[0].innerHTML = "score: " + score;
                status.innerHTML = "You Lost.";
            }
        }
        if (start_round == 1) {
            score -= 10;
            scoring[0].innerHTML = "score: " + score;
            start_round = 0;
        }
    }

    for (var i = 0; i < boundary.length - 1; i++) {
        boundary[i].onmouseover = hittingBorder;
    }



    function endGame() {
        if (hit == 0 && start_round == 1) {
            score += 5;
            scoring[0].innerHTML = "score: " + score;
            start_round = 0;
            status.innerHTML = "You Win.";
        }
    }
    end.onmouseover = endGame;


    function resetGame() {
        start_round = 1;
        hit = 0;
        score = 0;
        scoring[0].innerHTML = "score: " + score;
        status.innerHTML = "Begin by moving your mouse over the \"S\".";
        removeColor();
    }

    start.onclick = resetGame;
}
